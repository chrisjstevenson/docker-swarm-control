if ((Test-Path -Path '%ProgramFiles%\Docker') -eq $false) {

    Write-Host "getting latest version of Docker"

    $Version = (Invoke-WebRequest -UseBasicParsing https://raw.githubusercontent.com/docker/docker/master/VERSION).Content.Trim()
    Invoke-WebRequest "https://master.dockerproject.org/windows/x86_64/docker-$($Version).zip" -OutFile "docker-$Version.zip" -UseBasicParsing

    Write-Host "expanding archive to $env:ProgramFiles"

    Expand-Archive -Path "docker-$Version.zip" -DestinationPath $env:ProgramFiles

    Write-Host "setting up path and installing as service"

    # Add path to this PowerShell session immediately
    $env:path += ";$env:ProgramFiles\Docker"

    # For persistent use after a reboot
    $existingMachinePath = [Environment]::GetEnvironmentVariable("Path",[System.EnvironmentVariableTarget]::Machine)
    [Environment]::SetEnvironmentVariable("Path", $existingMachinePath + ";$env:ProgramFiles\Docker", [EnvironmentVariableTarget]::Machine)

    # Install as service
    & dockerd --register-service

    Start-Service -Name docker

    Write-Host "[*] Docker installed successfully"

} else {
     Write-Host "[*] Docker already installed"
}