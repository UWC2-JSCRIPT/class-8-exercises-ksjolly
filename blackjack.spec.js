describe('Tests for Blackjack', () => {
    describe('Test DealerShould Draw', ()  => {
        it('Should return correct number of points' , ()  => {
            // const points  = dealerShouldDraw([10,9])
            // expect(points.toBe( false ));
            expect(dealerShouldDraw(['Ace',6]).toBe(true));
            expect(dealerShouldDraw([10,6,'Ace']).toBe(false));
            expect(dealerShouldDraw([2,4,2,5]).toBe(true));
        })
    })

})