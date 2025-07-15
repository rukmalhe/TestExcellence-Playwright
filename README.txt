###### D365-UI-Test with playwright and TypeScripts #########
####### Integrate into CI/CD pipeline in Azure CI/CD ####


#Pre requisits
    install vs code
    install Node.js
    install git

# How to Install Playwright + TypeScript, and configure
    npm i -D playwright typescript ts-node @playwright/test
    npx playwright install

    npx tsc --init

    Note: modify tesconfig.json according to your env


 # install D365-UI-Test
    


# How to upgrade playwright
    pip install pytest-playwright playwright -U

# How to run playwright code-generator in vs-code

# Test prefix
    test_

# How to run test headless mode
    pytest

# How to run test in headed mode?
    pytest --headed
    or
    pytest --headed --slowmo 1000

    By default, Playwright runs tests in headless mode, in which the browser 
    is not visibly rendered. Headless mode is faster than headed mode and thus ideal
    for "real" testing (like in CI). However, headed mode is better when developing 
    tests so that you can see what is happening.

    The --slowmo option lets the caller set a hard sleep time after every Playwright call. 
    For example, --slowmo 1000 will pause execution for 1 second (1000 ms) after each call. 
    This option is a much better way to slow down tests than to add time.sleep(...) 
    calls everywhere!


# How to run in different browsers?
    pytest --browser webkit
    or
    pytest --browser webkit --browser firefox

# How to run test specifically?
    pytest test_login.py    # running single test class
    or
    pytest tests/test_todo_page.py tests/test_landing_page.py   # running two test classes
    or
    pytest -k test_add_a_todo_item  # specific function only

# How to run test in paralel?
    # install below dependancy
    pip install pytest-xdist
    # execute below command to run test in two cpu's
    pytest --numprocesses 2


# How to pause and record?
    use     page.pause() methord to stop the script, and record the rest of the step from
    inspector window.

# How playwright wait untill elements are ready?
Playwright automatically waits for elements to be ready before interacting with them. 
So, even though the test does not perform any explicit waiting for the result page, 
the expect function performs implicit waiting for the element to satisfy the to_have_value 
condition.

# POM ########
A Page Object models the user interface (UI) elements as objects within the test code.
 This helps eliminate redundant code and ensures that any updates to the UI require 
 modifications in only one place.

The Page Object is a widely-used design pattern in test automation, aimed at improving 
test maintainability and reducing code duplication. It involves creating an object-oriented 
class that acts as an interface to a specific page of the application under test (AUT). 
Tests interact with the UI through the methods defined in the Page Object class, simplifying 
the process. If the UI for that page changes, only the Page Object class needs to be updated, 
keeping all modifications centralized and minimizing changes to the actual test scripts.

This sample project interact with two pages, search page and results page

Each page should have its own dedicated class. These Page Object classes should be placed in a 
separate package outside of the test directory, allowing them to be imported and used within 
the test scripts.

Folder Structure
================
test_automation_playright
├── pages
│   ├── __init__.py
│   ├── search.py
│   └── result.py
└── tests
    └── test_search.py

The __init__.py file converts the pages directory into a Python package, 
enabling other modules to import it. This file will remain empty.
 The search.py and result.py modules will hold the Page Object classes for 
 the search and result pages, respectively.

Resources:

# PlayWright cheat sheet for assertions
    https://playwright.dev/python/docs/test-assertions

# Testing site
    https://symonstorozhenko.wixsite.com/website-1

        symon.storozhenko@gmail.com
        test123

# How to uninstall playwright
    npx playwright uninstall --all

# POM : https://www.selenium.dev/documentation/test_practices/encouraged/page_object_models/
