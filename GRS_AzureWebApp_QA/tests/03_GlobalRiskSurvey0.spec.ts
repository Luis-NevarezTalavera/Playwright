import { test } from '@playwright/test';
import { GlobalRiskSurveyPage0 } from './page-objects/GlobalRiskSurvey0.pom';

test('Validate Global Risk Survey page', async ({ page }) => {
  const surveyPage0 = new GlobalRiskSurveyPage0(page);

  await surveyPage0.navigate('/survey');
  await surveyPage0.verifyPageLoaded();
  await surveyPage0.verifyIncidentSectionsPresent();

  await surveyPage0.startButton.click();
});