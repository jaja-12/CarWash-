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
StockHub Ltd is a company located in Kigali City, Rwanda. It provides wholesale and retail
product distribution services. The company is struggling with inefficiencies due to its manual,
paper based system for managing stock movement and inventory records. The store manager
records product details characterized by product code, product name, category, quantity in stock,
unit price, supplier name and date received. The company also records warehouse information
characterized by warehouse code, warehouse name and warehouse location. Based on the
warehouse data, the store manager manually tracks stock in and stock out activities characterized
by transaction date, quantity moved and transaction type. This process is slow, prone to errors
and makes it difficult to monitor stock availability and generate inventory reports efficiently. To
address these challenges, the StockHub Ltd needs a web based application that handles the stock
management process. The system should allow the store manager to record stock details digitally
and automatically generate needed reports.  ,



SupplyNet Ltd is a company located in Musanze District, northern province of Rwanda. It
provides supply chain and logistics services. The company is experiencing inefficiencies due to
its manual system for tracking suppliers, shipments and deliveries. The procurement office
records supplier details characterized by supplier code, supplier name, telephone, address and
email. Shipment details are characterized by shipment number, shipment date, shipment status
and destination. The company also records product delivery information characterized by
delivery code, delivery date, quantity delivered and delivery status. This process is slow, prone to
errors and makes it difficult to monitor shipment progress and generate supply chain reports
efficiently. To address these challenges, the SupplyNet Ltd needs a web based application that
handles the supply chain management process. The system should allow procurement officers to
record supplier and shipment details digitally and automatically generate needed reports.





SalesPro Ltd is a company located in Huye District, southern province of Rwanda. It provides
electronic equipment sales services. The company is facing challenges due to its manual system
for recording daily sales transactions. The sales department records customer details
characterized by customer number, first name, last name, telephone and address. Products sold
are characterized by product code, product name, quantity sold and unit price. The company also
records sales information characterized by invoice number, sales date, payment method and total
amount paid. This process is time consuming, prone to errors and makes it difficult to generate
daily, weekly and monthly sales reports efficiently. To address these challenges, the SalesPro Ltd
needs a web based application that handles the sales recording process. The system should allow
sales officers to record sales details digitally and automatically generate needed reports.







==================================================
SYSTEM NAME
==================================================
Stock Management System (SMS),
Supply Chain Management System (SCMS),
Sales Record Management System (SRMS)

                    


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

The following entities and attributes are provided.
You MAY add missing identifiers, reference fields, and supporting entities if required by logic.

1. Product (productCode, productName, category, quantityInStock, unitPrice,
supplierName, dateReceived)
2. Warehouse (warehouseCode, warehouseName, warehouseLocation)
3. StockTransaction (transactionDate, quantityMoved, transactionType),


1. Supplier (supplierCode, supplierName, telephone, address, email)
2. Shipment (shipmentNumber, shipmentDate, shipmentStatus, destination)
3. Delivery (deliveryCode, deliveryDate, quantityDelivered, deliveryStatus),



1. Customer (customerNumber, firstName, lastName, telephone, address)
2. Product (productCode, productName, quantitySold, unitPrice)
3. Sale (invoiceNumber, salesDate, paymentMethod, totalAmountPaid)




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
Database Name: SMS,
               SCMS,
               SRMS
               

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
