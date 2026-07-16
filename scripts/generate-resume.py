#!/usr/bin/env python3
"""Generate Brede-Resume.pdf — single-column serif ATS format."""

from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import (
    BaseDocTemplate, Frame, PageTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable,
)
from reportlab.lib import colors

W, H = letter
M = 0.55 * inch

doc = BaseDocTemplate(
    "public/Brede-Resume.pdf",
    pagesize=letter,
    leftMargin=M, rightMargin=M, topMargin=0.45 * inch, bottomMargin=0.4 * inch,
    title="Brede Brendemo — Resume",
    author="Brede Brendemo",
)
frame = Frame(M, 0.4 * inch, W - 2 * M, H - 0.85 * inch, leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)
doc.addPageTemplates([PageTemplate(id="main", frames=[frame])])

name_st = ParagraphStyle("name", fontName="Times-Bold", fontSize=17, leading=20, alignment=1, spaceAfter=2)
contact_st = ParagraphStyle("contact", fontName="Times-Roman", fontSize=10, leading=12, alignment=1, spaceAfter=4)
section_st = ParagraphStyle("section", fontName="Times-Bold", fontSize=11, leading=13, spaceBefore=8, spaceAfter=0)
entry_l = ParagraphStyle("entry_l", fontName="Times-Bold", fontSize=10.5, leading=12.5)
entry_r = ParagraphStyle("entry_r", fontName="Times-Roman", fontSize=10.5, leading=12.5, alignment=2)
sub_l = ParagraphStyle("sub_l", fontName="Times-Italic", fontSize=10, leading=12)
sub_r = ParagraphStyle("sub_r", fontName="Times-Italic", fontSize=10, leading=12, alignment=2)
body_st = ParagraphStyle("body", fontName="Times-Roman", fontSize=10, leading=12.2)
bullet_st = ParagraphStyle(
    "bullet", fontName="Times-Roman", fontSize=10, leading=12.2,
    leftIndent=14, bulletIndent=4, spaceAfter=1,
)

story = []

def row(left, right, ls=entry_l, rs=entry_r):
    t = Table(
        [[Paragraph(left, ls), Paragraph(right, rs)]],
        colWidths=[(W - 2 * M) * 0.68, (W - 2 * M) * 0.32],
    )
    t.setStyle(TableStyle([
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ]))
    return t

def section(title):
    story.append(Paragraph(title, section_st))
    story.append(HRFlowable(width="100%", thickness=0.8, color=colors.black, spaceBefore=1, spaceAfter=4))

def bullets(items):
    for b in items:
        story.append(Paragraph(b, bullet_st, bulletText="•"))

# ---- Header ----------------------------------------------------------------
story.append(Paragraph("BREDE BRENDEMO", name_st))
story.append(Paragraph(
    "515-425-2574 | brede@brede.dev | linkedin.com/in/brede-brendemo | github.com/Brede-00 | brede.dev",
    contact_st,
))

# ---- Education -------------------------------------------------------------
section("EDUCATION")
story.append(row("Iowa State University — Ames, IA", "Jan. 2024 – Expected Dec. 2027"))
story.append(Paragraph("B.S. in Computer Science", sub_l))
story.append(Paragraph(
    "Coursework: Object-Oriented Programming, Data Structures, Discrete Computational Structures, Software "
    "Development Practices, Computer Architecture, Advanced Programming Techniques, Algorithms, Operating "
    "Systems, Programming Languages, Database Management Systems (in-progress &amp; scheduled; all completed by "
    "Summer 2027).",
    body_st,
))
story.append(Spacer(1, 5))
story.append(row("BI Norwegian Business School — Oslo, Norway", "Aug. 2020 – May 2023"))
story.append(Paragraph("Business Administration coursework", sub_l))

# ---- Projects ----------------------------------------------------------------
section("PROJECTS")

story.append(row("Circle — Private Social Media Platform", "2025 – Present"))
story.append(Paragraph("Next.js, TypeScript, React Native, Expo, Tailwind CSS, Supabase, PostgreSQL", sub_l))
bullets([
    "Built a full-stack platform for invite-based private communities with authentication, Circle creation, member "
    "access control, and post feeds backed by Supabase and PostgreSQL.",
    "Designed relational data models for users, Circles, memberships, posts, and permissions — enforced with "
    "row-level security policies at the database layer and Postgres triggers keeping denormalized counters consistent.",
    "Developed synchronized mobile and web experiences with Expo/React Native and Next.js; resolved cross-platform "
    "build and dependency conflicts across environments.",
])
story.append(Spacer(1, 5))

story.append(row("Real-Time Market Data Filter &amp; Alert System", "2026 – Present"))
story.append(Paragraph("Python, WebSockets, ntfy", sub_l))
bullets([
    "Built a Python event-processing system that consumes a live WebSocket stream of Solana token creation events, "
    "applying multi-criteria filtering logic to surface tokens matching configurable thresholds.",
    "Prototyped against simulated historical data before live deployment; integrated ntfy for real-time mobile push "
    "notifications on qualifying events.",
    "Redesigned the data pipeline around free public event streams after evaluating cost and coverage tradeoffs of "
    "paid per-token trade data APIs.",
])
story.append(Spacer(1, 5))

story.append(row("BetterFuture — Financial Simulation Engine", "Jun. – Aug. 2025"))
story.append(Paragraph("Java, Java Swing", sub_l))
bullets([
    "Built a Java financial planning tool with a Swing GUI that projects loan repayment, income, expenses, and net "
    "worth across multi-year horizons.",
    "Designed an object-oriented domain model — separating loans, assets, and repayment strategies into distinct "
    "classes — to support configurable allocation logic and long-term maintainability.",
])

# ---- Experience --------------------------------------------------------------
section("EXPERIENCE")

story.append(row("Broyte.no — Oslo, Norway", "Jun. 2022 – Dec. 2023"))
story.append(Paragraph("Technical Localization &amp; Customer Support Assistant (Contract)", sub_l))
bullets([
    "Reviewed and maintained structured JSON configuration files to ensure consistency and correctness across "
    "application content.",
    "Translated technical issues and requirements between developers and users; assisted with issue tracking and "
    "documentation to support application updates and localization efforts.",
])
story.append(Spacer(1, 5))

story.append(row("Dorm Mover — Iowa State University, Ames, IA", "May – Aug. 2025 &amp; May – Aug. 2026"))
bullets([
    "Prepared 100+ dorm rooms per summer under tight deadlines; coordinated with small teams to meet daily "
    "assignments efficiently.",
])

# ---- Skills --------------------------------------------------------------------
section("TECHNICAL SKILLS")
story.append(Paragraph("<b>Languages:</b> Java, Python, TypeScript, JavaScript", body_st))
story.append(Paragraph("<b>Frameworks &amp; Libraries:</b> Next.js, React, React Native (Expo), Tailwind CSS, JUnit", body_st))
story.append(Paragraph("<b>Databases &amp; Backend:</b> Supabase, PostgreSQL", body_st))
story.append(Paragraph("<b>Tools:</b> Git, GitHub, VS Code, Claude Code, PyCharm, Eclipse", body_st))

doc.build(story)
print("wrote public/Brede-Resume.pdf")
