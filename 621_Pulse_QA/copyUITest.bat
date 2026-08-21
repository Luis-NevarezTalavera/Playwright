copy /v UITestResultsPulse_%1.txt + Authenticated_%1.txt
mv APITestResultsPulse_%1.txt playwright-report-txt\APITestResultsPulse_%1.txt
mv UITestResultsPulse_%1.txt playwright-report-txt\UITestResultsPulse_%1.txt
del Authenticated_%1%.txt
del APITestResultsPulse_%1.txt