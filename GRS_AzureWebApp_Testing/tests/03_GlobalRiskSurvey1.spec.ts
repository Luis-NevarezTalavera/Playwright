import { test } from '@playwright/test';
import { GlobalRiskSurveyPage1 } from './page-objects/GlobalRiskSurvey1.pom';

test('Complete incident question', async ({ page }) => {
  const survey = new GlobalRiskSurveyPage1(page);

  await survey.navigate('/survey');

  await survey.answerIncidentQuestion(false);

  await survey.verifyIncidentAnswer('No');

  await survey.goToNextQuestion();
});