import { test } from '@playwright/test';
import { GlobalRiskSurveyPage2 } from './page-objects/GlobalRiskSurvey2.pom';

test('Complete first survey question', async ({ page }) => {
  const globalRiskSurvey2 = new GlobalRiskSurveyPage2(page);

  await globalRiskSurvey2.goto('/survey');

  await globalRiskSurvey2.validatePageNumber(1, 3);

  await globalRiskSurvey2.selectIncidentNo();

  await globalRiskSurvey2.verifyNoValidationErrors();

  await globalRiskSurvey2.navigateToNextQuestion();
});