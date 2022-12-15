Feature: Create a new course
    In order to hace courses in the platform
    AS a user with admin permissions
    I want to create a new course

    Scenario: A valid non existing course
        Given I send a PUT request to "/courses/ef8ac118-8d7f-49cc-abec-78e0d05" with body:
        """
        {
            "id": "ef8ac118-8d7f-49cc-abec-78e0d05",
            "name": "The best course",
            "duration": "5 hours"
        }
        """
        Then the response status code should be 201
        And the response should be empty

    Scenario: An invalid non existing course
        Given I send a PUT request to "/courses/ef8ac118-8d7f-49cc-abec-78e080a" with body:
        """
        {
            "id": "ef8ac118-8d7f-49cc-abec-78e080a",
            "name": 5,
            "duration": "5 hours"
        }
        """
        Then the response status code should be 422
