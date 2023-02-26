create table item(
	id serial primary key,
	"name" varchar(30),
	value numeric(30, 2),
	"height" numeric(30, 2),
	"width" numeric(30, 2),
	"depth" numeric(30, 2),
	weight numeric(30, 2)
)