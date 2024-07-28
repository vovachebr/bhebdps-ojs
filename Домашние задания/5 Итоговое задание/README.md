# Итоговое домашнее задание по курсу

## Задача №1. RPG-персонажи

Известный нам по прошлым задачам Вася решил создать школьную RPG игру и решил начать с разработки персонажей. 
Он также продумал способ получения денег - за счёт продажи персонажей с улучшенными характеристиками.
Чтобы помочь Васе, вам необходимо реализовать базовый класс Player со следующими характеристиками:

- жизнь
- мана
- скорость
- атака
- ловкость
- удача

Также вам необходимо сделать основных персонажей:

1. Воина
2. Мага
3. Лучника

и улучшенных:

1. Гнома - усиленного Воина
2. Демиурга - улучшенного Мага
3. Арбалетчика - усиленный Лучник

### Процесс реализации

#### Оружие

В игре присутствуют меч, лук и посох, а также их улучшенные версии: длинный меч, длинный лук и посох.

1. Реализуйте базовый класс *Weapon* со следующими свойствами:
    1. *name*
    2. *attack*
    3. *durability*
    4. *range*
    
2. Создайте метод *takeDamage( damage )*, добавляющий повреждение от соперника. 
Всё повреждение уменьшает значение прочности оружия (свойство *durability*).
Значение durability не должно падать ниже 0:
Пример:
```javascript
let weapon = new Weapon('Старый меч', 20, 10, 1);
console.log(weapon); // {name: 'Старый меч', attack: 20, durability: 10, initDurability: 10, range: 1}
weapon.takeDamage(5);
console.log(weapon.durability); // 5
weapon.takeDamage(50);
console.log(weapon.durability); // 0

let arm = new Arm();
console.log(arm); // {name: 'Рука', attack: 1, durability: Infinity, initDurability: Infinity, range: 1}
arm.takeDamage(20);
console.log(arm.durability); // Infinity

let sword = new Sword();
console.log(sword); // {name: 'Меч', attack: 25, durability: 500, initDurability: 500, range: 1}
sword.takeDamage(20);
console.log(sword.durability); // 480
sword.takeDamage(100);
console.log(sword.durability); // 380

let bow = new Bow();
console.log(bow); // {name: 'Лук', attack: 10, durability: 200, initDurability: 200, range: 3}
bow.takeDamage(10);
console.log(bow.durability); // 190
bow.takeDamage(100);
console.log(bow.durability); // 90
```

3. Создайте метод *getDamage()*, рассчитывающий урон от удара данным оружием.
Если прочность оружия (*durability*) больше или равна 30% от изначального, необходимо выдать значение
свойства attack иначе ```attack / 2```. При прочности менее 0, метод возвращает 0.
Пример:
```javascript
let bow = new Bow();
console.log(bow.getDamage(), bow.durability); // 10 200
bow.takeDamage(100);
console.log(bow.getDamage(), bow.durability); // 10 100
bow.takeDamage(50);
console.log(bow.getDamage(), bow.durability); // 5 50
bow.takeDamage(150);
console.log(bow.getDamage(), bow.durability); // 0 0
```

4. Создайте метод *isBroken()*, показывающий, сломано ли оружие. Возвращает *true* при durability равно 0.

5. Реализуйте наследуемые от класса *Weapon* классы из __таблицы 1__.

6. Реализуйте наследуемые классы улучшенного оружия из __таблицы 2__.

Таблица 1. Классы оружия.

| class      | name       | attack | durability | range |
|------------|------------|--------|------------|-------|
| Arm        | Рука       | 1      | Infinity   | 1     |
| Bow        | Лук        | 10     | 200        | 3     |
| Sword      | Меч        | 25     | 500        | 1     |
| Knife      | Нож        | 5      | 300        | 1     |
| Staff      | Посох      | 8      | 300        | 2     |

Таблица 2. Классы усиленного оружия. Прочерк («-») - свойство берётся из __наследуемого__ класса.

| class      | наследуется от | name           | attack | range | durability |
|------------|----------------|----------------|--------|-------|------------|
| LongBow    | Bow            | Длинный лук    | 15     | 4     | -          |
| Axe        | Sword          | Секира         | 27     | -     | 800        |
| StormStaff | Staff          | Посох Бури     | 10     | 3     | -          |

#### Персонажи

1. Реализуйте базовый класс *Player* со следующими свойствами и их начальными значениями:
    1. life = 100
    2. magic = 20
    3. speed = 1
    4. attack = 10
    5. agility = 5
    6. luck = 10
    8. description = 'Игрок'
    9. weapon = new Arm
    10. position (передаётся в аргументе конструктора)
    11. name (передаётся в аргументе конструктора)
    
2. Создайте метод *getLuck()*, возвращающий коэффициент удачливости. Метод должен возвращать
```(randomNumber + luck) / 100```, где randomNumber - случайное число от 0 до 100, а luck - 
 удача игрока (свойство *luck*).
Пример:
```javascript
let player = new Player(10, "Бэтмен");
console.log(player.getLuck()); // 0.739529623646014
console.log(player.getLuck()); // 0.962105150842756
console.log(player.getLuck()); // 0.7744570436764311
console.log(player.getLuck()); // 0.027506019463421127
```
 
3. Создайте метод *getDamage( distance )*, рассчитывающий силу удара по формуле:
```( attack + weaponDamage ) *  getLuck() / distance```. *distance* - расстояние между игроками, 
*weaponDamage* - значение урона текущего оружия у игрока ( *weapon.getDamage()*).
При значении *distance*, превышающем свойство range оружия, метод возвращает 0:
Пример:
```javascript
let player = new Player(10, "Человек паук");
console.log(player.getDamage(1)); // 8.619679739718416
console.log(player.getDamage(1)); // 5.535136748027568
console.log(player.getDamage(2)); // 0 (рука не достаёт)
console.log(player.getDamage(4)); // 0 (рука не достаёт)
```

4. Создайте метод *takeDamage( damage )*, принимающий полученный урон. Урон полностью вычитается из здоровья
персонажа. Значение здоровья персонажа не может падать меньше 0.
Пример:
```javascript
let player = new Player(10, "Хоббит");
player.takeDamage(10); // {life: 90, magic: 20, speed: 1, attack: 10, agility: 5, …}
console.log(player);
player.takeDamage(80); // {life: 10, magic: 20, speed: 1, attack: 10, agility: 5, …}
console.log(player);
player.takeDamage(90); // {life: 0, magic: 20, speed: 1, attack: 10, agility: 5, …}
console.log(player);
```

5. Создайте метод *isDead()*, возвращающий true при уровне жизни, равном 0.

6. Реализуйте наследуемые от класса *Player* классы из __таблицы 3__.

7. Реализуйте улучшенные классы игроков из __таблицы 4__.

Таблица 3. Классы бойцов. Прочерк («-») - свойство берётся из базового класса.

| class      | life | magic | speed | attack | agility | luck | description | weapon     | Основное оружие       |
|------------|------|-------|-------|--------|---------|------|-------------|------------|-----------------------|
| Warrior    | 120  | -     | 2     | 10     | -       | -    | Воин        | new Sword  | Sword -> Knife -> Arm |
| Archer     | 80   | 35    | -     | 5      | 10      | -    | Лучник      | new Bow    | Bow -> Knife -> Arm   |
| Mage       | 70   | 100   | -     | 5      | 8       | -    | Маг         | new Staff  | Staff -> Knife -> Arm |


Таблица 4. Классы улучшенных бойцов. Прочерк («-») - свойство берётся из __наследуемого__ класса.

| class       | наследуется от | life | magic | speed | attack | agility | luck | description    | weapon         | Основное оружие            |
|-------------|----------------|------|-------|-------|--------|---------|------|----------------|----------------|----------------------------|
| Dwarf       | Warrior        | 130  | -     | -     | 15     | -       | 20   | Гном           | new Axe        | Axe -> Knife -> Arm        |
| Crossbowman | Archer         | 85   | -     | -     | 8      | 20      | 15   | Арбалетчик     | new LongBow    | LongBow -> Knife -> Arm    |
| Demiurge    | Mage           | 80   | 120   | -     | 6      | -       | 12   | Демиург        | new StormStaff | StormStaff -> Knife -> Arm |

#### Особенности Классов

1. *Archer.getDamage( distance )*: сила удара рассчитывается по формуле ```( attack + weaponDamage ) * getLuck() * distance / weaponRange```
2. *Warrior.takeDamage( damage )*: при уровне здоровья менее 50% и *getLuck()* > 0.8, урон вычитается из маны, а не из здоровья. (свойство magic). При нулевом значении маны урон вычитается из здоровья.

Пример:
```javascript
let warrior = new Warrior(10, "Алёша Попович");
console.log(warrior.life, warrior.magic); // 120 20
warrior.takeDamage(50);
console.log(warrior.life, warrior.magic); // 70 20
warrior.takeDamage(20);
console.log(warrior.life, warrior.magic); // 50 20
warrior.takeDamage(5);
console.log(warrior.life, warrior.magic); // 50 15 (Алёша Попович получает урон 5 из магии.)
warrior.takeDamage(7);
console.log(warrior.life, warrior.magic); // 43 15
warrior.takeDamage(5);
console.log(warrior.life, warrior.magic); // 38 15
warrior.takeDamage(22);
console.log(warrior.life, warrior.magic); // 16 15
warrior.takeDamage(30);
console.log(warrior.life, warrior.magic); // 0 15
```

3.  *Mage.takeDamage( damage )*: При уровне маны более 50%, маг получает урон в 2 раза меньше базового и уменьшает значение маны на 12.
Пример:
```javascript
let mage = new Mage(10, "Гендальф");
console.log(mage.life, mage.magic); // 70 100
mage.takeDamage(50);
console.log(mage.life, mage.magic); // 45 88
mage.takeDamage(20);
console.log(mage.life, mage.magic); // 35 76
mage.takeDamage(10);
console.log(mage.life, mage.magic); // 30 64
mage.takeDamage(20);
console.log(mage.life, mage.magic); // 20 52
mage.takeDamage(20);
console.log(mage.life, mage.magic); // 10 40
mage.takeDamage(10);
console.log(mage.life, mage.magic); // 0 40
```

4. *Dwarf.takeDamage()*: Каждый шестой удар соперника наносит в 2 раза меньше урона при *getLuck()* > 0.5.
5. *Demiurge.getDamage()*: При уровне маны > 0, наносимый урон в 1.5 выше при getLuck() > 0.6. 

## Задача RPG-поединки

Вася решил устроить состязания между своими персонажами. Пока все они - искусственный интеллект.
Он научил их атаковать и защищаться. Реализуйте методы удар(), защита() и заклинание(), 
которые бы принимали в качестве аргумента экземпляры других классов и, в зависимости от уровня удачи,
уменьшали бы имеющиеся у персонажей показатели.

### Процесс реализации

Потребуется реализовать методы для удара, а также игровое поле, на котором будет происходить битва.
Игровое поле простое: игроки двигаются либо влево, либо вправо. На поле может быть несколько игроков,
поэтому нам потребуется обучить игроков выбирать соперника.

__Player__

1. Добавьте метод *moveLeft( distance )* и *moveRight( distance )*. За один вызов игрок может сместиться
на расстояние *distance*, но не более значения свойства *speed*. *moveLeft()* уменьшает значение *position*,
*moveRight()* увеличивает:
```javascript
let player = new Warrior(6, "Алёша Попович"); // speed: 2
console.log(player.position); // 6
player.moveLeft(5);
console.log(player.position); // 4
player.moveRight(2);
console.log(player.position); // 6
player.moveRight(1);
console.log(player.position); // 7
```

2. Добавьте метод *move( distance )*. Если distance меньше нуля, вызывается *moveLeft( distance )*, иначе
и *moveRight( distance )*.

3. Реализуйте метод *isAttackBlocked()*, который покажет, получилось ли игроку заблокировать удар
соперника. Верните *true* в случае, если *getLuck()* больше значения ( 100 - luck ) / 100, в ином случае - false. 
```javascript
let player = new Warrior(6, "Алёша Попович");
console.log(player.isAttackBlocked()); // false
console.log(player.isAttackBlocked()); // false
console.log(player.isAttackBlocked()); // false
console.log(player.isAttackBlocked()); // true
```

4. Реализуйте метод *dodged()*, показывающий, получилось ли игроку уклониться от атаки.
Верните true в случае, если *getLuck()* больше значения ```(100 - agility - speed * 3) / 100```, 
в ином случае - false.

5. Реализуйте метод *takeAttack( damage )*, который наносит удар другому игроку. 
Работа метода идёт в следующем порядке:
    1. Если атака была заблокирована (*isAttackBlocked*), урон приходится по оружию (weapon.takeDamage).
    2. Если произошло уклонение (*dodged*), урон не засчитывается
    3. В иных случаях игрок получает урон, равный damage

6. Реализуйте метод *checkWeapon*. В случае, если оружие износилось (*weapon.isBroken*), 
игрок получает следущее классом ниже. Так, для класса *Warrior* это будет 
*Sword* -> *Knife* -> *Arm*. Детали смотрите в колонке «Основное оружие» соответствующего класса.
P.S. У всех есть нож и голые руки. Руки не изнашиваются (у него *durability* = Infinity).

7. Создайте метод *tryAttack( enemy )*, который реализует атаку игроком.
    1. Рассчитать расстояние между игроком и врагом (*distance*). Расстояние между игроками всегда больше 0
    2. Если дальность оружия (*weapon.range*) не достаёт (больше distance) до врага, атака не засчитывается и метод прекращает работу.
    3. В ином случае запишите износ оружию (*weapon.takeDamage*) на ```10 * getLuck()```
    4. Нанесите урон (*getDamage*) противнику (*enemy.takeAttack*)
    5. Если игроки имеют одно и то же положение (*position*), атакуемый отскакивает на 1 деление вправо и принимает урон (*enemy.takeAttack*) с удвоенной силой (```damage * 2```)
Пример:
```javascript
let player = new Warrior(0, "Алёша Попович");
let archer = new Archer(2, "Леголас");

console.log(archer.life, archer.position); // 80 2
player.tryAttack(archer);
console.log(archer.life, archer.position); // 80 2 (Алёша Попович не достаёт)
player.moveRight(1); // Алёша Попович подходит
player.tryAttack(archer);
console.log(archer.life, archer.position); // 60.98 2
player.moveRight(1); // Алёша Попович подходит вплотную
player.tryAttack(archer);
console.log(archer.life, archer.position); // 32.86 3 (Алёша Попович бъёт с удвоенным уроном. Леголас отлетает на 1 позицию)
```

9. Реализуйте метод *chooseEnemy( players )*, где players - массив живых игроков на поле. (в том числе сам игрок!). Выбирает противника с минимальным здоровьем.
9. Реализуйте метод *moveToEnemy( enemy )*, котрый осуществляет движение по направлению к врагу.
10. Реализуйте метод *turn( players )* в соответствии с правилами каждого класса. Каждый ход игрок совершает следующую последовательность действий (именно в таком порядке): выбирает врага (*chooseEnemy*), двигается (*moveToEnemy*), наносит удар (*tryAttack*).
11. Реализуйте функцию *play( players )*, которая будет определять победителя. Также добавьте сообщения в методы *Player* для удобного вывода для наблюдения королевской битвы.

### Дополнительное задание
Напишите тесты для реализованных классов и их методов. Jest должен обеспечивать **не менее** 70% покрытие по строкам для тестируемых вами функций.