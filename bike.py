
class Bike(object):
    def __init__(self,price, max_speed):
        self.price = price 
        self.max_speed = max_speed
        self.miles = 0

    def displayInfo(self):
        print (self.price,self.max_speed,self.miles)
        return self

    def ride (self):
        print "Riding"
        self.miles += 10
        return self

    def reverse (self):
        self.miles -= 5
        print "Reversing"
        return self

 bike=Bike(100,50)       
 bike.displayInfo().ride().reverse()
 print bike.miles 