excel-database.zip: excel-database excel-database/spout
	zip excel-database.zip -r excel-database

excel-database: excel-database.php index.php LICENSE.txt README.md readme.txt
	rm -rf excel-database
	mkdir excel-database
	cp -R $^ excel-database

excel-database/spout: spout/src spout/LICENSE spout/README.md
	rm -rf excel-database/spout
	mkdir excel-database/spout
	cp -R $^ excel-database/spout


clean:
	rm -rf excel-database
	rm excel-database.zip

.PHONY: clean
