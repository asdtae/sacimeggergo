import turtle
from math import *

ablak = turtle.Screen()
ablak.bgcolor('purple')
ablak.setup(800, 1300)
ablak.tracer(0)
ablak.title("Matematikai inga")

t = turtle.Turtle()
t.shape('circle')
t.color('red')
t.shapesize(0.1, 0.1)
t.up()
t.goto(-200, 300)
t.down()
t.goto(200, 300)
t.goto(0, 300)
t.rt(90)

for i in range(20):
    t.fd(25)
    if i % 2 == 0:
        t.up()
    else:
        t.down()

inga_szal = turtle.Turtle()
inga_szal.shape('circle')
inga_szal.shapesize(0.05, 25)
inga_szal.rt(90)
inga_szal.color('orange')
inga_szal.up()
inga_szal.goto(0, 20)

kiiras = turtle.Pen()
kiiras.hideturtle()
kiiras.up()
kiiras.goto(-780, -300)
kiiras.color('red')

labda = turtle.Turtle()
labda.shape('circle')
labda.up()
labda.color('blue')

L = 500  # pixel ---> 0.132291667(meter)
szalhossz = 0.132291667 # meter
m = 0.5 # tomeg (kg)
g = 9.81
alfa = 0.087 # radian
A = L * sin(alfa)  # amplitudo  max x
t = 0
fi = asin(szalhossz / A) * sin(alfa)
labda.goto(L * sin(alfa), 300 - L * cos(alfa))
labda.down()

U = (1/(2*pi))*sqrt(g /szalhossz) # frekvencia
w = sqrt(g / szalhossz ) # korfrekvencia
y = 300 - L * cos(alfa)
E = (y + 200) * m * g # helyzeti energia max
T = (2 * pi ) * sqrt (szalhossz / g) # periodus

while True:
    t += 0.1
    x = A * cos(sqrt(g / L) * t + fi)  # x(t) = Acos(wt)
    alfa = sin(labda.xcor() / L)
    y = 300 - L * cos(alfa)
    inga_szal.setheading(90 + alfa * 180 / pi)
    inga_szal.goto(x / 2, 50)
    Ep = (y + 200) * m * g # potencialis energia
    Ec = E - Ep   # mozgasi energia
    labda.goto(x, y)
    amp = -g * sin(alfa)


    kiiras.write("  alfa = {:.3f}Rad\t Frekvencia = {:.4f}Hz\t Periodus ={:.2f}\t Amplitudo = {:.2f}m\tEp: {:.2f}J\tEc: {:.2f}J\t Korf = {:.2f}Rad/s\t ".format(alfa, U, T, amp, Ep, Ec, w), align='left',
              font=('Times New Romans', 14, 'normal'))


    ablak.update()

    kiiras.clear()