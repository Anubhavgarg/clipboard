# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility o




# Assuming database 
I am assuming that the database will be like this as of now:


- Agent Table:
Id 
Name 
Status - Can be ENUM { ACTIVE, INACTIVE, DELETED } where active means the agent is working, inactive means agent is temporarily unavailable and deleted means he is not working anymore.
Other information 


- Shift Table:
Id 
type 
Description
FacilityId : It will have a join that what all facilities have worked in which shifts.
AgentId: It will have a join that which agent have worked in which shift.
Other information


- Facility table:
Id 
Name 
description 
Other information


Assumptions:


- Agent to facility is 1:many meaning one agent belongs to multiple facilities then:



# SQL TABLE addition
- We will add a column facility id in agent table.
- Custom name in agent table where facility will be providing the name at the time of agent creation.


- Work estimate : 2 hours
## Implementation ticket for SQL table: 
- SQL query table updation query
- In shifts table, we will keep agent id only not custom name as it is there in agent table


# Function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- Unit test cases where we are sending initially the agent id is there we can send custom name
- We have facility id as an input to the function.
- The getShiftsByFacility function returns the custom agent ID, facility ID for each shift           

- Estimation : 1 hour
## Implementation:
- We have agent id and facility id in shifts table and we can join agent table and populate custom name and provide in the getshiftsbyfacility table.


# Report generation
- Report should have custom agent id and facility id and not the internal database id of agent
- Time/Effort Estimate: 3 hours
## Implementation:
- Unit test cases needs to be finalize that whatever agent id data is getting proper custom agent id should come.
- Migrate agents data with some custom name or make facility to put custom name for all the agents.
- All custom names data should be present in the database.
- In generating the reports, we will remove agent id which is internal and add new column that is custom name.
- In generate report function , we will have facility id and agent id in shifts table. We can join on facility id and agent id on agent table and provide the custom agent name and replace with agent id.


## Validation of all requirements
- Custom agent name with facility id is saved, retrieved and used in report generation properly.
- The report will have proper data with the custom agent name instead of agent id and how much work he has done. All is correct.
- Estimation: 3 hrs
# Implementation:
- Unit test cases needs to be finalize so that all cases are covered.
- Check if all data is saving fine, retrieving and generating.

## Final table will be like 

# Agent Table:
- Id 
- Name 
- Status - Can be ENUM { ACTIVE, INACTIVE, DELETED } where active means the agent is working, inactive means agent is temporarily unavailable and deleted means he is not working anymore.
- FacilityId: It will be added
- Custom_name: will be added by the facility
- Other information 

**Unique constraint on facilityid, custom_name**


# Shift Table:
- Id 
- type 
- Description
- FacilityId : It will have a join that what all facilities have worked in which shifts.
- AgentId: It will have a join that which agent have worked in which shift.
-  Other information


# Facility table:
- Id 
- Name 
- description 
- Other information


