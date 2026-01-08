const { expect } = require('@playwright/test');

/**
 * BasePage class - Base class for all page objects in E2E testing
 * Provides reusable methods for common interactions with web elements
 */
class BasePage {
  /**
   * Constructor for BasePage
   * @param {Page} page - Playwright page object
   */
  constructor(page) {
    this.page = page;
    this.timeout = 30000; // Default timeout in milliseconds
  }

  /**
   * Navigate to a specific URL
   * @param {string} url - The URL to navigate to
   */
  async navigateTo(url) {
    await this.page.goto(url, { waitUntil: 'networkidle' });
  }

  /**
   * Wait for a URL to match a pattern
   * @param {string|RegExp} urlPattern - The URL pattern to wait for
   */
  async waitForUrl(urlPattern) {
    await this.page.waitForURL(urlPattern, { timeout: this.timeout });
  }

  /**
   * Click on an element
   * @param {string} selector - CSS selector or locator
   */
  async click(selector) {
    await this.page.locator(selector).click({ timeout: this.timeout });
  }

  /**
   * Double-click on an element
   * @param {string} selector - CSS selector or locator
   */
  async doubleClick(selector) {
    await this.page.locator(selector).dblclick({ timeout: this.timeout });
  }

  /**
   * Right-click on an element
   * @param {string} selector - CSS selector or locator
   */
  async rightClick(selector) {
    await this.page.locator(selector).click({ button: 'right', timeout: this.timeout });
  }

  /**
   * Type text into an input field
   * @param {string} selector - CSS selector or locator
   * @param {string} text - Text to type
   */
  async typeText(selector, text) {
    await this.page.locator(selector).fill(text, { timeout: this.timeout });
  }

  /**
   * Clear an input field
   * @param {string} selector - CSS selector or locator
   */
  async clearField(selector) {
    await this.page.locator(selector).clear({ timeout: this.timeout });
  }

  /**
   * Select an option from a dropdown by value
   * @param {string} selector - CSS selector or locator
   * @param {string} value - Option value to select
   */
  async selectDropdownByValue(selector, value) {
    await this.page.locator(selector).selectOption(value, { timeout: this.timeout });
  }

  /**
   * Select an option from a dropdown by label
   * @param {string} selector - CSS selector or locator
   * @param {string} label - Option label to select
   */
  async selectDropdownByLabel(selector, label) {
    await this.page.locator(`${selector} >> text=${label}`).click();
  }

  /**
   * Check a checkbox
   * @param {string} selector - CSS selector or locator
   */
  async checkCheckbox(selector) {
    await this.page.locator(selector).check({ timeout: this.timeout });
  }

  /**
   * Uncheck a checkbox
   * @param {string} selector - CSS selector or locator
   */
  async uncheckCheckbox(selector) {
    await this.page.locator(selector).uncheck({ timeout: this.timeout });
  }

  /**
   * Check if a checkbox is checked
   * @param {string} selector - CSS selector or locator
   * @returns {boolean} True if checkbox is checked
   */
  async isCheckboxChecked(selector) {
    return await this.page.locator(selector).isChecked();
  }

  /**
   * Hover over an element
   * @param {string} selector - CSS selector or locator
   */
  async hoverOver(selector) {
    await this.page.locator(selector).hover({ timeout: this.timeout });
  }

  /**
   * Get text content of an element
   * @param {string} selector - CSS selector or locator
   * @returns {string} Text content
   */
  async getText(selector) {
    return await this.page.locator(selector).textContent({ timeout: this.timeout });
  }

  /**
   * Get the value of an input element
   * @param {string} selector - CSS selector or locator
   * @returns {string} Input value
   */
  async getInputValue(selector) {
    return await this.page.locator(selector).inputValue({ timeout: this.timeout });
  }

  /**
   * Get attribute value of an element
   * @param {string} selector - CSS selector or locator
   * @param {string} attribute - Attribute name
   * @returns {string} Attribute value
   */
  async getAttribute(selector, attribute) {
    return await this.page.locator(selector).getAttribute(attribute);
  }

  /**
   * Check if an element is visible
   * @param {string} selector - CSS selector or locator
   * @returns {boolean} True if element is visible
   */
  async isVisible(selector) {
    return await this.page.locator(selector).isVisible();
  }

  /**
   * Check if an element is hidden
   * @param {string} selector - CSS selector or locator
   * @returns {boolean} True if element is hidden
   */
  async isHidden(selector) {
    return await this.page.locator(selector).isHidden();
  }

  /**
   * Check if an element is enabled
   * @param {string} selector - CSS selector or locator
   * @returns {boolean} True if element is enabled
   */
  async isEnabled(selector) {
    return await this.page.locator(selector).isEnabled();
  }

  /**
   * Check if an element is disabled
   * @param {string} selector - CSS selector or locator
   * @returns {boolean} True if element is disabled
   */
  async isDisabled(selector) {
    return await this.page.locator(selector).isDisabled();
  }

  /**
   * Wait for an element to be visible
   * @param {string} selector - CSS selector or locator
   */
  async waitForElement(selector) {
    await this.page.locator(selector).waitFor({ state: 'visible', timeout: this.timeout });
  }

  /**
   * Wait for an element to be hidden
   * @param {string} selector - CSS selector or locator
   */
  async waitForElementHidden(selector) {
    await this.page.locator(selector).waitFor({ state: 'hidden', timeout: this.timeout });
  }

  /**
   * Wait for a specific text to appear on the page
   * @param {string} text - Text to wait for
   */
  async waitForText(text) {
    await this.page.waitForSelector(`text=${text}`, { timeout: this.timeout });
  }

  /**
   * Get count of elements matching selector
   * @param {string} selector - CSS selector or locator
   * @returns {number} Count of elements
   */
  async getElementCount(selector) {
    return await this.page.locator(selector).count();
  }

  /**
   * Get all text contents of elements matching selector
   * @param {string} selector - CSS selector or locator
   * @returns {Array<string>} Array of text contents
   */
  async getAllText(selector) {
    return await this.page.locator(selector).allTextContents();
  }

  /**
   * Press a keyboard key
   * @param {string} key - Key to press
   */
  async pressKey(key) {
    await this.page.keyboard.press(key);
  }

  /**
   * Press multiple keys
   * @param {string} keys - Keys to press (e.g., 'Control+A')
   */
  async pressKeys(keys) {
    await this.page.keyboard.press(keys);
  }

  /**
   * Type text character by character
   * @param {string} text - Text to type
   */
  async typeTextSlowly(text) {
    await this.page.keyboard.type(text, { delay: 100 });
  }

  /**
   * Scroll to an element
   * @param {string} selector - CSS selector or locator
   */
  async scrollToElement(selector) {
    await this.page.locator(selector).scrollIntoViewIfNeeded();
  }

  /**
   * Scroll to a specific position
   * @param {number} x - X coordinate
   * @param {number} y - Y coordinate
   */
  async scrollToPosition(x, y) {
    await this.page.evaluate(({ x, y }) => {
      window.scrollTo(x, y);
    }, { x, y });
  }

  /**
   * Take a screenshot
   * @param {string} filename - Name of the screenshot file
   */
  async takeScreenshot(filename) {
    await this.page.screenshot({ path: `screenshots/${filename}.png` });
  }

  /**
   * Switch to an iframe
   * @param {string} selector - CSS selector or locator of iframe
   * @returns {FrameLocator} Frame object
   */
  switchToFrame(selector) {
    return this.page.frameLocator(selector);
  }

  /**
   * Switch to a new tab/window
   * @param {Function} action - Action that opens a new window
   * @returns {Page} New page object
   */
  async switchToNewTab(action) {
    const newPagePromise = this.page.context().waitForEvent('page');
    await action();
    return await newPagePromise;
  }

  /**
   * Accept browser alert
   */
  async acceptAlert() {
    this.page.on('dialog', dialog => dialog.accept());
  }

  /**
   * Dismiss browser alert
   */
  async dismissAlert() {
    this.page.on('dialog', dialog => dialog.dismiss());
  }

  /**
   * Get alert message
   * @returns {Promise<string>} Alert message
   */
  async getAlertMessage() {
    return new Promise((resolve) => {
      this.page.on('dialog', dialog => {
        resolve(dialog.message());
        dialog.accept();
      });
    });
  }

  /**
   * Upload a file
   * @param {string} selector - CSS selector or locator of input[type="file"]
   * @param {string} filePath - Path to the file to upload
   */
  async uploadFile(selector, filePath) {
    await this.page.locator(selector).setInputFiles(filePath);
  }

  /**
   * Upload multiple files
   * @param {string} selector - CSS selector or locator of input[type="file"]
   * @param {Array<string>} filePaths - Paths to files to upload
   */
  async uploadMultipleFiles(selector, filePaths) {
    await this.page.locator(selector).setInputFiles(filePaths);
  }

  /**
   * Execute JavaScript on the page
   * @param {string} script - JavaScript code to execute
   * @param {*} arg - Argument to pass to the script
   * @returns {*} Result of script execution
   */
  async executeScript(script, arg = null) {
    return await this.page.evaluate(script, arg);
  }

  /**
   * Get current URL
   * @returns {string} Current page URL
   */
  getCurrentUrl() {
    return this.page.url();
  }

  /**
   * Reload the page
   */
  async reloadPage() {
    await this.page.reload({ waitUntil: 'networkidle' });
  }

  /**
   * Go back in browser history
   */
  async goBack() {
    await this.page.goBack({ waitUntil: 'networkidle' });
  }

  /**
   * Go forward in browser history
   */
  async goForward() {
    await this.page.goForward({ waitUntil: 'networkidle' });
  }

  /**
   * Get page title
   * @returns {string} Page title
   */
  async getPageTitle() {
    return await this.page.title();
  }

  /**
   * Assertion: Check if element exists
   * @param {string} selector - CSS selector or locator
   */
  async assertElementExists(selector) {
    await expect(this.page.locator(selector)).toBeAttached();
  }

  /**
   * Assertion: Check if element is visible
   * @param {string} selector - CSS selector or locator
   */
  async assertElementVisible(selector) {
    await expect(this.page.locator(selector)).toBeVisible();
  }

  /**
   * Assertion: Check if element is hidden
   * @param {string} selector - CSS selector or locator
   */
  async assertElementHidden(selector) {
    await expect(this.page.locator(selector)).toBeHidden();
  }

  /**
   * Assertion: Check if text is present on page
   * @param {string} text - Text to check
   */
  async assertTextPresent(text) {
    await expect(this.page).toContainText(text);
  }

  /**
   * Assertion: Check element text equals expected
   * @param {string} selector - CSS selector or locator
   * @param {string} expectedText - Expected text
   */
  async assertElementText(selector, expectedText) {
    await expect(this.page.locator(selector)).toHaveText(expectedText);
  }

  /**
   * Assertion: Check element text contains expected
   * @param {string} selector - CSS selector or locator
   * @param {string} expectedText - Expected text substring
   */
  async assertElementContainsText(selector, expectedText) {
    await expect(this.page.locator(selector)).toContainText(expectedText);
  }

  /**
   * Assertion: Check input value
   * @param {string} selector - CSS selector or locator
   * @param {string} expectedValue - Expected value
   */
  async assertInputValue(selector, expectedValue) {
    await expect(this.page.locator(selector)).toHaveValue(expectedValue);
  }

  /**
   * Assertion: Check element attribute value
   * @param {string} selector - CSS selector or locator
   * @param {string} attribute - Attribute name
   * @param {string} expectedValue - Expected attribute value
   */
  async assertAttributeValue(selector, attribute, expectedValue) {
    await expect(this.page.locator(selector)).toHaveAttribute(attribute, expectedValue);
  }

  /**
   * Assertion: Check if element is enabled
   * @param {string} selector - CSS selector or locator
   */
  async assertElementEnabled(selector) {
    await expect(this.page.locator(selector)).toBeEnabled();
  }

  /**
   * Assertion: Check if element is disabled
   * @param {string} selector - CSS selector or locator
   */
  async assertElementDisabled(selector) {
    await expect(this.page.locator(selector)).toBeDisabled();
  }

  /**
   * Assertion: Check URL equals expected
   * @param {string|RegExp} expectedUrl - Expected URL
   */
  async assertUrlEquals(expectedUrl) {
    await expect(this.page).toHaveURL(expectedUrl);
  }

  /**
   * Assertion: Check page title
   * @param {string} expectedTitle - Expected title
   */
  async assertPageTitle(expectedTitle) {
    await expect(this.page).toHaveTitle(expectedTitle);
  }

  /**
   * Assertion: Check element count
   * @param {string} selector - CSS selector or locator
   * @param {number} expectedCount - Expected count
   */
  async assertElementCount(selector, expectedCount) {
    await expect(this.page.locator(selector)).toHaveCount(expectedCount);
  }

  /**
   * Wait and perform action with retry
   * @param {Function} action - Action to perform
   * @param {number} maxRetries - Maximum number of retries
   * @param {number} delay - Delay between retries in ms
   */
  async retryAction(action, maxRetries = 3, delay = 1000) {
    for (let i = 0; i < maxRetries; i++) {
      try {
        return await action();
      } catch (error) {
        if (i === maxRetries - 1) throw error;
        await this.page.waitForTimeout(delay);
      }
    }
  }

  /**
   * Close the page
   */
  async closePage() {
    await this.page.close();
  }
}

module.exports = BasePage;
