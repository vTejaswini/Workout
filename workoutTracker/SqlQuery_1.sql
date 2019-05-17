create database WorkoutApp
use WorkoutApp

create table workout_category(
category_id int identity not null,
category_name varchar(64) 
)
alter table workout_category add constraint Pk_workout_category primary key(category_id)

create table workout_collection(
workout_title varchar(128),
workout_note varchar(256),
calories_burn_per_min float,
category_id int,
workout_id int identity,

constraint Pk_workout_collection primary key (workout_id)
)

alter table workout_collection add constraint Fk_workout_collection_workout_collection foreign key(category_id) references workout_category(category_id) 


create table workout_active(
activity_id int identity,
workout_id int,
start_time time,
starts_date date,
end_date date,
end_time time,
comment varchar(64),
statuss bit

constraint Pk_workout_active primary key (activity_id )
FOREIGN KEY (workout_id) REFERENCES workout_collection(workout_id)
)

select * from workout_active




