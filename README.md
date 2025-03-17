front-end: http://localhost:4177/
Server running at http://127.0.0.1:3000/
API docs available at http://localhost:3000/docs

Toiminnallisuudet:
Rekisteröityminen ja kirjautuminen
Päiväkirjamerkintöjen tekeminen
Päiväkirjamerkintöjen hakeminen

Tietokanta:
DiaryEntries
+-------------+--------------+------+-----+-------------------+----------------+
| Field       | Type         | Null | Key | Default           | Extra          |
+-------------+--------------+------+-----+-------------------+----------------+
| entry_id    | int(11)      | NO   | PRI | NULL              | auto_increment |
| user_id     | int(11)      | NO   | MUL | NULL              |                |
| entry_date  | date         | NO   |     | NULL              |                |
| mood        | varchar(50)  | YES  |     | NULL              |                |
| weight      | decimal(5,2) | YES  |     | NULL              |                |
| sleep_hours | int(11)      | YES  |     | NULL              |                |
| notes       | text         | YES  |     | NULL              |                |
| created_at  | datetime     | NO   |     | CURRENT_TIMESTAMP |                |
+-------------+--------------+------+-----+-------------------+----------------

Users
+------------+--------------+------+-----+-------------------+----------------+
| Field      | Type         | Null | Key | Default           | Extra          |
+------------+--------------+------+-----+-------------------+----------------+
| user_id    | int(11)      | NO   | PRI | NULL              | auto_increment |
| username   | varchar(50)  | NO   | UNI | NULL              |                |
| password   | varchar(255) | NO   |     | NULL              |                |
| email      | varchar(100) | NO   | UNI | NULL              |                |
| created_at | datetime     | NO   |     | CURRENT_TIMESTAMP |                |
| user_level | varchar(10)  | YES  |     | regular           |                |
+------------+--------------+------+-----+-------------------+----------------

Bugit/ongelmat:
Fetch ei toimi hakiessa Entries
Rekisteröitymisen jälkeen ei pääse suoraan kirjautumaan

Käyttöliittymän kuvat:
![Screenshot 2025-03-16 at 22 57 00](https://github.com/user-attachments/assets/b0454c77-536f-4262-aa93-99e6cbbbf511)
![Screenshot 2025-03-16 at 22 57 04](https://github.com/user-attachments/assets/967dceb7-1a72-48bf-884f-e5f7659babea)
![Screenshot 2025-03-16 at 22 57 11](https://github.com/user-attachments/assets/af02bd0b-24d0-4413-9e3d-5369fffbb5db)
