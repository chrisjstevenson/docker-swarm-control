$currLocation = Split-Path -parent $MyInvocation.MyCommand.Definition
push-location $currLocation

#
#  This is a work in progress
#
#
function Install-DockerToHost {

    Write-Host "getting latest version of Docker"

    $Version = (Invoke-WebRequest -UseBasicParsing https://raw.githubusercontent.com/docker/docker/master/VERSION).Content.Trim()
    Invoke-WebRequest "https://master.dockerproject.org/windows/x86_64/docker-$($Version).zip" -OutFile "docker-$Version.zip" -UseBasicParsing

    Write-Host "expanding archive to $env:ProgramFiles"

    Expand-Archive -Path "docker-$Version.zip" -DestinationPath $env:ProgramFiles -Force

    Write-Host "setting up path and installing as service"

    # Add path to this PowerShell session immediately
    $env:path += ";$env:ProgramFiles\Docker"

    # For persistent use after a reboot
    $existingMachinePath = [Environment]::GetEnvironmentVariable("Path",[System.EnvironmentVariableTarget]::Machine)
    [Environment]::SetEnvironmentVariable("Path", $existingMachinePath + ";$env:ProgramFiles\Docker", [EnvironmentVariableTarget]::Machine)

    # Install as service
    & dockerd --register-service

    Start-Service -Name docker

}

function Install-DaemonConfig {

    Write-Host "adding daemon.json"

    # this will create multiple docker file locations if a new graph path is specified in daemon.json
    Stop-Service -Name docker
    Copy-Item -Path 'daemon.json' -Destination "$env:ProgramData\docker\config"
    Start-Service -Name docker

}

function Install-Nanoserver {

    # pre-load micrsoft nanoserver image
    & docker load -i nanoserver.tar
    & docker tag 9473d5d31d36 microsoft/nanoserver:latest
}


try {

    Install-DockerToHost
    Install-DaemonConfig
    Install-Nanoserver

}
catch
{
    pop-location
    throw
}





