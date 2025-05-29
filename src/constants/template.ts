export const templates = [
    { 
        id:"blank", 
        label:"Blank Document", 
        imageUrl: "/blank-document.svg",
        initialContent: "",
    },
    { 
        id:"software-proposal", 
        label:"Software development proposal", 
        imageUrl: "/software-proposal.svg",
        initialContent:`
            <h1>Software Proposal</h1>
            <p><strong>Project Title:</strong> [Enter Project Name]</p>
            <p><strong>Proposed By:</strong> [Your Name / Company]</p>
            <p><strong>Date:</strong> [Date]</p>

            <h2>1. Introduction</h2>
            <p>[Brief overview of the project and its purpose]</p>

            <h2>2. Problem Statement</h2>
            <p>[Describe the problem the software aims to solve]</p>

            <h2>3. Proposed Solution</h2>
            <p>[Summarize your proposed software solution]</p>

            <h2>4. Features</h2>
            <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            </ul>

            <h2>5. Timeline</h2>
            <p>[Include major milestones and estimated dates]</p>

            <h2>6. Budget</h2>
            <p>[Cost breakdown and total estimate]</p>

            <h2>7. Contact Information</h2>
            <p>[Your Name]<br>[Email Address]<br>[Phone Number]</p>

        `,
    },
    { 
        id:"project-proposal", 
        label:"Project proposal", 
        imageUrl: "/project-proposal.svg",
        initialContent:`
                <h1>Project Proposal</h1>

        <p><strong>Project Title:</strong> [Enter Project Title]</p>
        <p><strong>Prepared By:</strong> [Your Name or Team Name]</p>
        <p><strong>Date:</strong> [Proposal Date]</p>

        <h2>1. Executive Summary</h2>
        <p>[Brief overview of the project, goals, and outcomes]</p>

        <h2>2. Project Objectives</h2>
        <ul>
        <li>Objective 1</li>
        <li>Objective 2</li>
        <li>Objective 3</li>
        </ul>

        <h2>3. Scope of the Project</h2>
        <p>[Define what is included and excluded from the project]</p>

        <h2>4. Methodology</h2>
        <p>[Describe how the project will be executed – phases, steps, tools, etc.]</p>

        <h2>5. Deliverables</h2>
        <ul>
        <li>Deliverable 1 – [Description]</li>
        <li>Deliverable 2 – [Description]</li>
        </ul>

        <h2>6. Timeline</h2>
        <table border="1" cellpadding="6">
        <tr>
            <th>Phase</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>Phase 1</td>
            <td>[Start]</td>
            <td>[End]</td>
            <td>[Brief description]</td>
        </tr>
        <tr>
            <td>Phase 2</td>
            <td>[Start]</td>
            <td>[End]</td>
            <td>[Brief description]</td>
        </tr>
        </table>

        <h2>7. Budget Estimate</h2>
        <p>[Summarize estimated costs and any financial breakdown if needed]</p>

        <h2>8. Risk Management</h2>
        <p>[List potential risks and how they will be managed or mitigated]</p>

        <h2>9. Conclusion</h2>
        <p>[Final remarks about why the project is valuable and feasible]</p>

        <h2>10. Contact Information</h2>
        <p>Name: [Your Name]<br>
        Email: [your@email.com]<br>
        Phone: [123-456-7890]</p>

        `,
    },
    { 
        id:"business-letter", 
        label:"Business letter", 
        imageUrl: "/business-letter.svg",
        initialContent:`
            <p>[Your Name]<br>
            [Your Address]<br>
            [City, State ZIP Code]<br>
            [Email Address]<br>
            [Phone Number]</p>

            <p>[Date]</p>

            <p>[Recipient Name]<br>
            [Company Name]<br>
            [Address]<br>
            [City, State ZIP Code]</p>

            <p>Dear [Recipient Name],</p>

            <p>[Opening paragraph - introduce the purpose of the letter]</p>
            <p>[Body - elaborate on the message you want to convey]</p>
            <p>[Closing paragraph - summarize and indicate next steps]</p>

            <p>Sincerely,<br>
            [Your Name]</p>

        `,
    },
    { 
        id:"resume", 
        label:"Resume", 
        imageUrl: "/resume.svg",
        initialContent:`
            <h1>[Your Full Name]</h1>
            <p>Email: [your@email.com] | Phone: [123-456-7890]</p>
            <p>LinkedIn: [linkedin.com/in/yourprofile] | GitHub: [github.com/yourprofile]</p>

            <h2>Professional Summary</h2>
            <p>[Brief summary of your experience and goals]</p>

            <h2>Skills</h2>
            <ul>
            <li>Skill 1</li>
            <li>Skill 2</li>
            <li>Skill 3</li>
            </ul>

            <h2>Experience</h2>
            <h3>[Job Title] – [Company Name]</h3>
            <p><em>[Start Date] – [End Date]</em></p>
            <ul>
            <li>Responsibility 1</li>
            <li>Responsibility 2</li>
            </ul>

            <h2>Education</h2>
            <p><strong>[Degree]</strong> – [University Name] (<em>[Year]</em>)</p>

        `,
    },
    { 
        id:"cover-letter", 
        label:"Cover letter", 
        imageUrl: "/cover-letter.svg",
        initialContent:`
            <p>[Your Name]<br>
            [Your Address]<br>
            [City, State ZIP Code]<br>
            [Email Address]<br>
            [Phone Number]</p>

            <p>[Date]</p>

            <p>[Hiring Manager Name]<br>
            [Company Name]<br>
            [Address]</p>

            <p>Dear [Hiring Manager Name],</p>

            <p>I am writing to express my interest in the [Job Title] position at [Company Name]. With a background in [Your Field], I bring [Key Strengths] to contribute to your team.</p>

            <p>[Elaborate on experience, passion, or skills relevant to the job]</p>

            <p>I would welcome the opportunity to further discuss how I can contribute to your team. Thank you for your time and consideration.</p>

            <p>Sincerely,<br>
            [Your Name]</p>

        `,
    },
    { 
        id:"letter", 
        label:"Letter", 
        imageUrl: "/letter.svg",
        initialContent:`
            <p>[Your Name]<br>
            [Your Address]<br>
            [City, State ZIP Code]</p>

            <p>[Date]</p>

            <p>[Recipient Name]<br>
            [Recipient Address]</p>

            <p>Dear [Recipient Name],</p>

            <p>[Introductory paragraph]</p>
            <p>[Main content of the letter]</p>
            <p>[Closing statement]</p>

            <p>Sincerely,<br>
            [Your Name]</p>

        `,
    },
]