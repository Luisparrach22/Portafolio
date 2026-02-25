import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaGitAlt,
  FaAndroid,
  FaApple,
  FaNodeJs,
  FaLinux
} from "react-icons/fa"

import {
  SiJavascript,
  SiMysql,
  SiTailwindcss,
  SiKotlin,
  SiMongodb,
  SiPython
} from "react-icons/si"

export const skills = [
  { name: "Java", icon: <FaJava size={45} color="#f89820" /> },
  { name: "React", icon: <FaReact size={45} color="#61DAFB" /> },
  { name: "NodeJS", icon: <FaNodeJs size={45} color="#339933" /> },
  { name: "Git", icon: <FaGitAlt size={45} color="#F05032" /> },
  { name: "MySQL", icon: <SiMysql size={45} color="#00758F" /> },
  { name: "MongoDB", icon: <SiMongodb size={45} color="#47A248" /> },
  { name: "Linux", icon: <FaLinux size={45} color="#FCC624" /> },
  { name: "Python", icon: <SiPython size={45} color="#3776AB" /> },
  { name: "Tailwind", icon: <SiTailwindcss size={45} color="#38BDF8" /> },
  { name: "Android", icon: <FaAndroid size={45} color="#3DDC84" /> },
  { name: "iOS", icon: <FaApple size={45} color="#A2AAAD" /> },
  { name: "Kotlin", icon: <SiKotlin size={45} color="#7F52FF" /> },
  { name: "HTML", icon: <FaHtml5 size={45} color="#E34F26" /> },
  { name: "CSS", icon: <FaCss3Alt size={45} color="#1572B6" /> },
  { name: "JavaScript", icon: <SiJavascript size={45} color="#F7DF1E" /> }
]