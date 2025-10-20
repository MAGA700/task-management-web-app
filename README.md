# 🧩 Task Management Web App

Полный учебный проект для трёх лабораторных работ по курсу **Web-технологии (Backend + Frontend + Integration)**.

---

## 📘 Лабораторная 1 – Backend (Spring Boot + MariaDB + JWT)

### 🎯 Цель
Разработать REST-бэкенд для системы управления задачами.  
Приложение должно поддерживать регистрацию пользователей, создание задач, назначение исполнителей и безопасную аутентификацию с использованием **JWT**.

---

### 🏗️ Технологии
- Java 17+
- Spring Boot 3 (Web, Data JPA, Security)
- MariaDB
- JWT (JSON Web Token)
- Maven
- JUnit 5 / MockMvc (тестирование)

---

### 📂 Структура проекта
task-management-web-app/
├── src/
│ ├── main/
│ │ ├── java/com/example/taskapp/
│ │ │ ├── controller/
│ │ │ ├── dto/
│ │ │ ├── entity/
│ │ │ ├── repository/
│ │ │ ├── service/
│ │ │ └── security/
│ │ └── resources/
│ │ ├── application.yml
│ │ └── data.sql (seed)
│ └── test/
│ └── java/com/example/taskapp/
├── pom.xml
└── README.md

markdown
Копировать код

---

### 📋 Основные задачи (Лаба 1)
1. **Инициализация проекта Spring Boot** с зависимостями.
2. **Подключение MariaDB** и настройка `application.yml`.
3. **Создание сущностей**  
   - `User(id, username, email, hashedPassword, availabilityStatus)`  
   - `Task(id, title, description, priorityLevel, assignedUserId, creationTimestamp)`
4. **Реализация CRUD-API** для `/users` и `/tasks`.
5. **Механизм автоприсвоения задачи** свободному пользователю.
6. **Аутентификация и авторизация (JWT)**.
7. **Тестирование (5+ тестов)** с использованием JUnit и MockMvc.
8. **README + ER-диаграмма** (в этом репозитории).

---

### ⚙️ Настройка
1. Установить MariaDB и создать базу:
   ```sql
   CREATE DATABASE task_app;
Прописать данные в application.yml:

yaml
Копировать код
spring:
  datasource:
    url: jdbc:mariadb://localhost:3306/task_app
    username: your_user
    password: your_pass
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true
Запустить проект:

bash
Копировать код
./mvnw spring-boot:run
Проверить:

bash
Копировать код
http://localhost:8080/health
🧠 ER-диаграмма
scss
Копировать код
User (1) ────< (N) Task
Каждая задача принадлежит одному пользователю.
При удалении пользователя связанные задачи каскадно удаляются.

🔒 API и безопасность
Регистрация / логин возвращают JWT-токен.

Защищённые маршруты /api/** доступны только при валидном токене.

Авторизованный пользователь может видеть и изменять только свои задачи.

🧪 Тестирование
JUnit 5 + MockMvc.

Минимум 5 тестов:

создание пользователя,

назначение задачи,

невалидная аутентификация,

фильтрация задач,

проверка прав доступа.