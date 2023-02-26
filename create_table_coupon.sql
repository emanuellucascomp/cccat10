create table coupon(
	id serial primary key,
	"name" varchar(30) not null,
	value numeric(30, 2) not null,
	expiration_date date not null
)