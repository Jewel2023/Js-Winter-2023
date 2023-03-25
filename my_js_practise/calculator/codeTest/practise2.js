describe('WebDriver IO Code Test', () => {
    
        // Question - 1: (50-points)
        /**
         * Testcase: Verify rewards form is empty and Conitnue button is disabled
         * Steps:
         * 1. Launch hotels.com
         * 2. Click on Learn about Hotels.com Rewards
         * 3. -> Verify Hotels Rewards opened in a new window
         * 4. Click on Join Now
         * 5. -> Verify Form is blank
         * 6. -> Verify Continue button is NOT enabled
         */
        it('Verify rewards form is empty and Conitnue button is disabled', async () => {
         // 1. Launch hotels.com
    await browser.url('https://www.hotels.com/');

    // 2. Click on Learn about Hotels.com Rewards
    const learnAboutRewardsLink = await $('#hdr-rewards');
    await learnAboutRewardsLink.click();

    // 3. -> Verify Hotels Rewards opened in a new window
    const windows = await browser.getWindowHandles();
    await browser.switchToWindow(windows[1]);
    const hotelsRewardsHeader = await $('h1=Hotels.com Rewards');
    await expect(await hotelsRewardsHeader.isDisplayed()).toBe(true);
    
    // 4. Click on Join Now
    const joinNowButton = await $('button=Join now');
    await joinNowButton.click();

    // 5. -> Verify Form is blank
    const firstNameField = await $('#firstname');
    const lastNameField = await $('#lastname');
    await expect(await firstNameField.getValue()).toBe('');
    await expect(await lastNameField.getValue()).toBe('');

    // 6. -> Verify Continue button is NOT enabled
    const continueButton = await $('button=Continue');
    await expect(await continueButton.isEnabled()).toBe(false);
  });

});



    // Question - 2: (50-points)
    /**
     * Testcase: Verify past dates are disabled in Calendar
     * Steps:
     * 1. Launch hotels.com
     * 2. Click on Dates section
     * 3. If not already, go to current month
     * 4. -> Verify all past dates are disabled
     */
    it('Verify past dates are disabled in Calendar', async () => {
    // 1. Launch hotels.com
    await browser.url('https://www.hotels.com/');

    // 2. Click on Dates section
    const datesInput = await $('input[name="q-destination"]');
    await datesInput.click();

    // 3. If not already, go to current month
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    const calendarHeader = await $('.widget-daterange-picker-header');
    if (!calendarHeader.getText().includes(currentMonth)) {
      const nextMonthButton = await $('.widget-daterange-picker-next');
      await nextMonthButton.click();
    }
    // 4. -> Verify all past dates are disabled
    const allDates = await $$('.widget-daterange-picker tbody td');
    const pastDates = allDates.filter(async date => {
      const classes = await date.getAttribute('class');
      return classes.includes('disabled') || classes.includes('prev');
    });
    await expect(await pastDates.length).toBe(allDates.length);
  });
    

    
            // 4. -> Verify all past dates are disabled
    const allDates = await $$('.widget-daterange-picker tbody td');
    const pastDates = allDates.filter(async date => {
      const classes = await date.getAttribute('class');
      return classes.includes('disabled') || classes.includes('prev');
    });
    await expect(await pastDates.length).toBe(allDates.length);
  
            





        
