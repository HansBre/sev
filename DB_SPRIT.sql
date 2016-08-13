USE  db_sprit;

CREATE TABLE Drinks(
	Description VARCHAR(255),
    Name varchar(255),
    Image varchar(255),
    CONSTRAINT PK_Drinks PRIMARY KEY(Name));

    
CREATE TABLE Ingredients(Name varchar(255) NOT NULL,
Description varchar(255), CONSTRAINT PK_Ingredients PRIMARY KEY (Name));

CREATE TABLE Components(DrinkName varchar(255),IngredientName varchar(255),Quantity varchar(255),
CONSTRAINT FK_Ingredients FOREIGN KEY(IngredientName) REFERENCES Ingredients(Name),
CONSTRAINT FK_Drinks FOREIGN KEY(DrinkName) REFERENCES Drinks(Name),
CONSTRAINT PK_Components PRIMARY KEY (DrinkName,IngredientName));

INSERT INTO Ingredients VALUES ("Creme de Teste","Bitter smak av feiling");
INSERT INTO Ingredients VALUES ("Chambord","Fransk bringebær likør");
INSERT INTO Ingredients VALUES ("Apple Vodka","Vodka med smak av eple.");
INSERT INTO Ingredients VALUES ("Apple sourz","Syrlig eplelikør");
INSERT INTO Ingredients VALUES ("Eplejuice","Vær obs på at kvaliteten på juice kan være make or break.");
INSERT INTO Ingredients VALUES ("Rom","Sjørøversaft");
INSERT INTO Ingredients VALUES ("Cognac","Brandy fra Cognac,Frankrike graderes V.S , V.S.O.P  ,X.O i forhold til lagringstid");
INSERT INTO Ingredients VALUES ("Cointreau","Digg Triple-Sec, grei å få fyr på");
INSERT INTO Ingredients VALUES ("Sitronjuice","Syrligheten vil variere, smak derfor til drinken.");
INSERT INTO Ingredients VALUES ("Crème de Mure","Bjørnebærlikør");
INSERT INTO Ingredients VALUES ("Gin","Sprit med smak hovedsaklig av einebær.");
INSERT INTO Ingredients VALUES ("Sukkerlake","For syrebalanse.");
INSERT INTO Ingredients VALUES ("Bacardi Limon","Rom med smak av sitron");
INSERT INTO Ingredients VALUES ("Hvit Rom","Hvit sjørøverjuice.");
INSERT INTO Ingredients VALUES ("Limejuice","Syrligheten vil variere, smak derfor til drinken.");
INSERT INTO Ingredients VALUES ("Dry Vermut","Hethvin med funky stuff.");
INSERT INTO Ingredients VALUES ("Vodka","The omnipresent spirit of the tsars");
INSERT INTO Ingredients VALUES ("Kahlura","Kaffelikør, ganske tung  og eges for layering.");
INSERT INTO Ingredients VALUES ("Crème de Cacao","Sjokoladelikør");
INSERT INTO Ingredients VALUES ("Crème de Menthe","Myntelikør");
INSERT INTO Ingredients VALUES ("Kremfløte","Vær kritisk til konsistens pls.");
INSERT INTO Ingredients VALUES ("Akevitt","Klok bruk av poteter. Smak av karve, blanke er som regel mindre søte i og med at de ikke har vært lagret på cherryfat.");
INSERT INTO Ingredients VALUES ("Te","WHY YOU DO THIS?");
INSERT INTO Ingredients VALUES ("Rye Whiskey","Whiskey laget på rug");
INSERT INTO Ingredients VALUES ("Rød Vermut","Rød hethvin med funky stuff");
INSERT INTO Ingredients VALUES ("Xante","Konjakk med smak av pære");
INSERT INTO Ingredients VALUES ("Amaretto","Mandellikør");
INSERT INTO Ingredients VALUES ("Malibu","Kokosrom");
INSERT INTO Ingredients VALUES ("Melk","");
INSERT INTO Ingredients VALUES ("Angostura aromatic bitter","aromatisk bitter?");
INSERT INTO Ingredients VALUES ("Tequila","Beskrivelse kommer");
INSERT INTO Ingredients VALUES ("Pisang Ambon","Bananishlikør");
INSERT INTO Ingredients VALUES ("Passoa","Pasjonsfruktlikør");
INSERT INTO Ingredients VALUES ("Vanniljevodka","");
INSERT INTO Ingredients VALUES ("Ananasjuice","");
INSERT INTO Ingredients VALUES ("Eggehvite","");
INSERT INTO Ingredients VALUES ("Ron Zacapa","Sjørøverjuice med kvalitet");
INSERT INTO Ingredients VALUES ("Blå Curacao","Får ting til å sjå blå ut!");
INSERT INTO Ingredients VALUES ("Midori","Melonlikør");
INSERT INTO Ingredients VALUES ("Grenadine","");
INSERT INTO Ingredients VALUES ("Cola","");
INSERT INTO Ingredients VALUES ("Soda","");
INSERT INTO Ingredients VALUES ("Galliano","");
INSERT INTO Ingredients VALUES ("Pasjonsfruktsirup","");
INSERT INTO Ingredients VALUES ("Bourbon","");
INSERT INTO Ingredients VALUES ("Mynte","");
INSERT INTO Ingredients VALUES ("Knust is","");
INSERT INTO Ingredients VALUES ("Ingefærøl","");
INSERT INTO Ingredients VALUES ("Elderflower","");
INSERT INTO Ingredients VALUES ("Vanilla vodka","");
INSERT INTO Ingredients VALUES("Fireball","");
INSERT INTO Ingredients VALUES("Peachtree","");
INSERT INTO Ingredients VALUES("Tranebærjuice","");
INSERT INTO Ingredients  VALUES("Kokosnøttsirup","");
INSERT INTO Ingredients  VALUES("Kiwisirup","");
INSERT INTO Ingredients  VALUES("Cachaça","");
INSERT INTO Ingredients VALUES("Bringebærcoulis","");
INSERT INTO Ingredients  VALUES("Chartreuse","");
INSERT INTO Ingredients  VALUES("Absinthe","");
INSERT INTO Ingredients  VALUES("Campari","");
INSERT INTO Ingredients  VALUES("Chilli vodka","");
INSERT INTO Ingredients  VALUES("Lycheelikør","");
INSERT INTO Ingredients  VALUES("Mintu","");
INSERT INTO Ingredients  VALUES("Baileys","");
INSERT INTO Ingredients  VALUES("","");
INSERT INTO Ingredients  VALUES("","");
INSERT INTO Ingredients  VALUES("","");
INSERT INTO Ingredients  VALUES("","");
INSERT INTO Ingredients  VALUES("","");
INSERT INTO Ingredients  VALUES("","");
INSERT INTO Ingredients  VALUES("","");
INSERT INTO Ingredients  VALUES("","");
INSERT INTO Ingredients  VALUES("","");
