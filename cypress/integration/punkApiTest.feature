Feature: Test Punk API

Scenario: Validating the Punk API
Given I call the punk api with beer id 192
Then I expect a 200 status response
And the malt is Extra Pale
And the malt value is 5.3 and the unit is kilograms