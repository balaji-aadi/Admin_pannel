import HomeIcon from '@mui/icons-material/Home';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import LocalLibrarySharpIcon from '@mui/icons-material/LocalLibrarySharp';
import HelpOutlineSharpIcon from '@mui/icons-material/HelpOutlineSharp';
import SmartDisplaySharpIcon from '@mui/icons-material/SmartDisplaySharp';
import MonetizationOnSharpIcon from '@mui/icons-material/MonetizationOnSharp';
import GroupSharpIcon from '@mui/icons-material/GroupSharp';
import ArticleSharpIcon from '@mui/icons-material/ArticleSharp';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import LayersIcon from '@mui/icons-material/Layers';

export const SidebarData = 
[
    {
        "title" : "Dashboard",
        "icon"  : <HomeIcon/>,
        "path"  : '/home'
    },

    {
        "title" : "File Manager",
        "icon"  : <DescriptionOutlinedIcon/>,
        "path"  : '/fileManager'
    },
    {
        "title" : "Manage Learning",
        "icon" : <LocalLibrarySharpIcon/>,
        "icon2" : <ExpandMoreSharpIcon/>,
        "path" : "/manageLearning",
        "childrens": [
            {
                "title": "Practice Test's",
                "path" : "/manageLearning/practicetest",
                
            },
            {
                "title": "Lessons",
                "path" : "/manageLearning/lessons",
                
            },
            {
                "title": "Video's",
                "path": "/manageLearning/video",
            },
            
        ]

    },
    {
        "title" : "Manage Test's",
        "icon" : <ArticleSharpIcon/>,
        "icon2" : <ExpandMoreSharpIcon/>,
        "path": "/practice",
        "childrens": [
            {
                "title": "Quizzes",
            },
            {
                "title": "Exams",
            },
            {
                "title": "Quiz Types",
            },
            {
                "title": "Exam Types",
            },
        ]

    },
    {
        "title" : "Question Bank",
        "icon" : <HelpOutlineSharpIcon />,
        "icon2" : <ExpandMoreSharpIcon/>,
        "path": "/practice",
        "childrens": [
            {
                "title": "Questions",
                
            },
            {
                "title": "Important Questions",
                
            },
            {
                "title": "Comprehension",
                
            },
            {
                "title": "Question Types",
                
            },
        ]

    },
    {
        "title" : "Video Bank",
        "icon"  : <SmartDisplaySharpIcon/>,
        "path"  : '/home'
    },

    {
        "title" : "Lesson Bank",
        "icon"  : <DescriptionOutlinedIcon/>,
        "path"  : '/fileManager'
    },
    {
        "title" : "Monetization",
        "icon" : <MonetizationOnSharpIcon/>,
        "icon2" : <ExpandMoreSharpIcon/>,
        "path": "/practice",
        "childrens": [
            {
                "title": "Plans",
            },
            {
                "title": "Subscriptions",
            },
            {
                "title": "Payments",
            },
        ]

    },
    {
        "title" : "Manage Users",
        "icon" : <GroupSharpIcon/>,
        "icon2" : <ExpandMoreSharpIcon />,
        "path": "/practice",
        "childrens": [
            {
                "title": "Users",
            }
        ]

    },
    {
        "title" : "Manage Subjects",
        "icon" : <LayersIcon/>,
        "icon2" : <ExpandMoreSharpIcon />,
        "path": "/practice",
        "childrens": [
            {
                "title": "Sections",
            },
            {
                "title": "Skills",
            },
            {
                "title": "Topics",
            },
        ]

    },
    {
        "title" : "Settings",
        "icon" : <SettingsSharpIcon/>,
        "icon2" : <ExpandMoreSharpIcon/>,
        "path": "/practice",
        "childrens": [
            {
                "title": "Account",
            },
            {
                "title": "Security",
            },
            {
                "title": "Billing",
            },
        ]

    },


]