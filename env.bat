@ECHO off

SET NodeVersion=14.12.0
CALL SET Path=%SYS32PATH%;%GitPath%;%PyPath%;%CD%\node_modules\.bin;C:\Development\nodejs\node-v%NodeVersion%-win-x64

ECHO Environment:

ECHO | SET /p="Path:           "
ECHO %Path%

ECHO | SET /p="nodejs version: "
node -v

ECHO | SET /p="npm version:    "
npm -version
