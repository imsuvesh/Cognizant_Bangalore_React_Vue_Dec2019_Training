describe("A suite", function() {
    it("contains spec with an expectation", function() {
      expect(true).toBe(true);
    });
  });

  function Add(x,y){
      return x + y;
  }

  describe("An addition suite", function() {
    it("add two numbers", function() {
      expect(Add(20,30)).toBe(50);
    });
  });