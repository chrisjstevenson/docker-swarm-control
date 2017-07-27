$currLocation = Split-Path -parent $MyInvocation.MyCommand.Definition
push-location $currLocation

#
#  This is a work in progress
#    - You will need to remove all images first
#    - Note that you may need to remove any hyper-v network component manually through device manager.
#
#

function Remove-DockerService {

    Write-Host "stopping and removing docker service"

    # There is no namtive remove-service in posh
    $Service = Get-WmiObject -Class Win32_Service -Filter "Name='docker'"
    if ($Service -ne $null) {
        Stop-Service -Name 'docker'
        $Service.Delete()
    }
}

function Remove-DockerFiles {

    $paths = @(
        "$env:ProgramData\docker",
        "D:\docker",
        "$env:ProgramFiles\docker",
        "HKLM:\System\CurrentControlSet\Services\EventLog\Application\docker")

    foreach ($path in $paths) {

        if (Test-Path -Path $path) {
            Write-Host "removing $path"
            Remove-Item -Path $path -Force -Recurse
        }
    }
}


try {

    Remove-DockerService
    Remove-DockerFiles

}
catch
{
    pop-location
    throw
}

