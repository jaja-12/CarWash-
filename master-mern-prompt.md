#SYSTEM MASTER PROMPT
## USE IT WISELY BY READING WHERE NEED CHANGES BEFORE PASTING INTO YOUR AI GENERATOR
### MAKE SURE TO MENTION THE COLOR PREFERENCES OF YOURS SO THAT ALL THE SYSTEM LOOKS UNIQUE
#### PLEASE FOLLOW THE RULES SO THAT THIS PROMPT BECOME USEFUL TO YOU GUYS (*WISH YOU ALL THE BEST💪📌*)


Act as an expert system analyst, NoSQL database designer, and senior full-stack developer.

Your task is to DESIGN and DEVELOP a COMPLETE, CORRECT, and EXAM-READY web-based application
using MongoDB and Mongoose.

You MUST analyze the scenario, DISCOVER relationships, and DESIGN schemas logically.
Do NOT assume relationships are explicitly given.
The final system must be logically correct and require NO debugging due to poor design.

==================================================
SYSTEM SCENARIO
==================================================
[REPLACE THIS SECTION]

<Describe the company, location in Rwanda, and the services offered.
Explain the current manual/paper-based process.
Explain what data is recorded manually.
Explain the problems caused by the manual system.
Explain the need for a web-based system.>

==================================================
SYSTEM NAME
==================================================
[REPLACE THIS SECTION]

<System Full Name (with abbreviation)>

==================================================
SYSTEM OBJECTIVE
==================================================
- Digitally manage core business operations
- Automate calculations and status updates
- Track records and payments accurately
- Secure the system using authenticated user access
- Generate bills and daily/monthly reports

==================================================
BASE ENTITIES & ATTRIBUTES (CAN BE EXTENDED)
==================================================
[REPLACE THIS SECTION]

The following entities and attributes are provided.
You MAY add missing identifiers, reference fields, and supporting entities if required by logic.

1. EntityOne(...)
2. EntityTwo(...)
3. EntityThree(...)
4. EntityFour(...)

IMPORTANT:
- Authentication is required but no User entity is provided.
- YOU MUST design and add a User schema.
- All collections must have unique identifiers (_id).

==================================================
DATA MODELING & RELATIONSHIP DESIGN (MONGOOSE)
==================================================
From the scenario:
- Identify all required collections
- Derive relationships using real-world business logic
- Decide when to use ObjectId references
- Justify each relationship

The data model MUST support:
- One-to-many and many-to-one relationships where logically required
- Historical records (data reused over time)
- Accurate billing and reporting

Produce:
- Clear data model explanation
- Relationship description with cardinalities

==================================================
DATABASE SETUP
==================================================
Database Name: [REPLACE_DB_NAME]

- Use MongoDB with Mongoose ODM
- Define schemas with:
  - Field types
  - Required fields
  - Indexes where appropriate
  - References (ObjectId)
- Hash user passwords using bcrypt

==================================================
PROJECT STRUCTURE (DO NOT CHANGE)
==================================================
Use EXACTLY this structure:

FirstName_LastName_National_Practical_Exam_2025/
 ├── backend-project/
 │   ├── models/
 │   ├── controllers/
 │   ├── routes/
 │   ├── middleware/
 │   └── server.js
 └── frontend-project/

==================================================
BACKEND DEVELOPMENT
==================================================
TECHNOLOGY STACK:
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- bcrypt
- express-session

ARCHITECTURE:
- Clean MVC or layered architecture
- RESTful APIs
- Proper separation of concerns

AUTHENTICATION:
- Session-based authentication
- Secure login using username and hashed password
- Middleware to protect private routes

CRUD RULES:
- INSERT operations: ALL core entities
- UPDATE / DELETE / RETRIEVE operations: ONLY the main transaction entity
  (e.g. Record, Service, Sale, Payroll, Ticket, etc.)

==================================================
BUSINESS LOGIC RULES
==================================================
[REPLACE / ADJUST THIS SECTION]

- Core calculations must be automatic
- Pricing must follow defined rules
- Status fields must update automatically based on actions
- The system must prevent logical inconsistencies

==================================================
FRONTEND DEVELOPMENT
==================================================
TECHNOLOGY STACK:
- React.js
- Tailwind CSS v3
- Axios
- React Router

PAGES / COMPONENTS:
- Login
- Entity management pages (based on system)
- Main transaction page
- Payment page (if applicable)
- Reports
- Logout

UI REQUIREMENTS:
- Fully responsive
- Form validation
- Data tables
- Navigation menu
- Professional layout

==================================================
SYSTEM INTEGRATION
==================================================
- Integrate frontend and backend using Axios
- Protect routes using session authentication
- Handle errors and loading states properly

==================================================
REPORTS & BILLING
==================================================
Generate the following outputs using MongoDB aggregation pipelines:

1. Bill / Invoice:
   - Core identifying fields
   - Dates
   - Calculated values
   - Payment information

2. Daily / Monthly Report:
   - Summary data
   - Totals
   - Grouped results

==================================================
DELIVERABLES
==================================================
Provide EVERYTHING in one complete output:
- Data model explanation
- Mongoose schemas
- Backend source code
- Frontend source code
- Authentication logic
- Aggregation queries
- Instructions to run the system

==================================================
QUALITY CONSTRAINTS
==================================================
- Do NOT leave design gaps
- Do NOT produce partial solutions
- Do NOT invent unjustified assumptions
- The system must be COMPLETE, LOGICALLY SOUND, and READY FOR EVALUATION
