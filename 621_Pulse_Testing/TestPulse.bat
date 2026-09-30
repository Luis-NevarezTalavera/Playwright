@echo off
set USER_TYPE=%1
set MFA_CODE=%2
set testFolder="C:\Users\LuisTalavera\QA\Playwright\621_Pulse_Testing"
set FORCE_COLOR=false
echo "Running Playwright tests in: %testFolder%"
cd %testFolder%
call date-time.bat
echo "Starting Survey JS Survey APIs Tests"
call npx playwright test APIs --project=msEdge-notAuthenticated    > "%testFolder%\APITestResultsPulse_%mydate%T%mytime%.txt"  2>&1
echo "Starting Web UI Tests for Not Authenticated User: %USER_TYPE% with MFA Code: %MFA_CODE%"
call npx playwright test NotA --project=msEdge-notAuthenticated   > "%testFolder%\UITestResultsPulse_%mydate%T%mytime%.txt"   2>&1
echo "Starting Web UI Tests for Authenticated User: %USER_TYPE%"
call npx playwright test Auth --project=msEdge-Authenticated --workers 4 > "%testFolder%\Authenticated_%mydate%T%mytime%.txt" 2>&1
call copyUITest.bat %mydate%T%mytime%
dir "%testFolder%\playwright-report-txt\*_%mydate%T%mytime%.txt"