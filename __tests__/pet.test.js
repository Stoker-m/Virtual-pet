const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
  });
  describe('constructor', () => {
  
    it('sets the name property', () => {
      const pet = new Pet('Fido');
  
      expect(pet.name).toEqual('Fido');
    });
  });
  describe('constructor', () => {
  
    it('has a initial age of 0', () => {
      const pet = new Pet('Fido');
  
      expect(pet.age).toEqual(0);
    });
  });
  describe('growUp', () => {
    it('increments the age by 1', () => {
      const pet = new Pet('Fido');
  
      pet.growUp();
  
      expect(pet.age).toEqual(1);
    });
  });
  describe('growUp', () => {
    it('increments the hunger by 5', () => {
      const pet = new Pet('Fido');
  
      pet.growUp();
  
      expect(pet.hunger).toEqual(5);
    });
  });
  describe('growUp', () => {
    it('decreases the hunger by 3', () => {
      const pet = new Pet('Fido');
  
      pet.growUp();
  
      expect(pet.fitness).toEqual(7);
    });
  });
  describe('walk', () => {
    it('increases fitness by 4', () => {
      const pet = new Pet('fido');
  
      pet.fitness = 4;
      pet.walk();
  
      expect(pet.fitness).toEqual(8);
    });
  });
  describe('walk', () => {
  
    it('increases fitness by to a maximum of 10', () => {
      const pet = new Pet('fido');
  
      pet.fitness = 8;
      pet.walk();
  
      expect(pet.fitness).toEqual(10);
    });
  });
  describe('feed', () => {
  
    it('decreases hunger by to a minimum of 0', () => {
      const pet = new Pet('fido');
  
      pet.hunger = 2;
      pet.feed();
  
      expect(pet.hunger).toEqual(0);
    });
  });
  describe('checkup', () => {
  
    it('Check status of Pet', () => {
      const pet = new Pet('fido');
        pet.fitness = 3;
        pet.hunger = 0;
        expect(pet.checkUp()).toBe("I need a walk");
    
        pet.hunger = 5;
        pet.fitness = 10;
        expect(pet.checkUp()).toBe("I am hungry");
    
        pet.fitness = 3;
        pet.hunger = 5;
        expect(pet.checkUp()).toBe("I am hungry AND I need a walk");
    
        pet.hunger = 1;
        pet.fitness = 9;
        expect(pet.checkUp()).toBe("I feel great!");
      });
    });
    describe("isAlive", () => {
      it("check`s pet is alive or dead", () => {
        const pet = new Pet("Fido");
        pet.fitness = 0;
        expect(pet.isAlive).toEqual(false);
    
        pet.hunger = 10;
        expect(pet.isAlive).toEqual(false);
    
        pet.age = 30;
        expect(pet.isAlive).toEqual(false);

        pet.fitness = 5;
        pet.hunger = 5;
        pet.age = 5;
        expect (pet.isAlive).toEqual(true);
      });
    });
    describe('feed', () => {
    
      it('throws an error if the pet is not alive', () => {
          const pet = new Pet('Fido');
    
          pet.age = 30;
    
          expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
        });
      });
      describe('walk', () => {
    
        it('throws an error if the pet is not alive', () => {
            const pet = new Pet('Fido');
      
            pet.age = 30;
      
            expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
          });
        });
        describe('growUp', () => {
    
          it('throws an error if the pet is not alive', () => {
              const pet = new Pet('Fido');
        
              pet.age = 30;
        
              expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
            });
          });
          describe('checkUp', () => {
    
            it('throws an error if the pet is not alive', () => {
                const pet = new Pet('Fido');
          
                pet.age = 30;
          
                expect(() => pet.checkUp()).toThrow('Your pet is no longer alive :(');
              });
            });