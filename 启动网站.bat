@echo off
cd /d "%~dp0"
set "NODE=node"
where node >nul 2>nul
if errorlevel 1 set "NODE=%LOCALAPPDATA%\Doubao\User Data\sandbox_runtime\bases\772984f6fd3a8ae0ae7d2422cd7c2bfa\node\node.exe"
echo Starting local preview on http://127.0.0.1:5173 ...
start "" /min cmd /c "timeout /t 3 >nul & start http://127.0.0.1:5173/"
"%NODE%" node_modules\vite\bin\vite.js --host 127.0.0.1 --port 5173
pause