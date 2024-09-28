@echo off
if %1 == run (
    .venv\Scripts\activate.bat
    python -m sanic server:server %2 %3
    goto end
)
if %1 == install (
    python -m venv .venv
    .venv\Scripts\activate.bat
    python -m pip install -r requirements.txt
    echo "Succesfully installed"
    goto end
)
if %1 == resetDB (
    rm server.db
    goto end
)

    echo now available:
    echo   1. run
    echo   2. install
    echo please use that
:end