

const defaultAvatar = "https://picsum.photos/100/100?grayscale";

export const teamData = {
    corrosion: [
        { id: "pete_mathews", name: "Pete Mathews", role: "Sr Dir, Software Solutions", reportsTo: null, avatar: "https://picsum.photos/100/100?grayscale&random=34", aiHint: "person avatar" },
        { id: "rajendra_prasad_m", name: "Rajendra Prasad M", role: "Director, Software Engineering", reportsTo: "pete_mathews", avatar: "https://picsum.photos/100/100?grayscale&random=35", aiHint: "person avatar" },
        { id: "deep_narayan_singh", name: "Deep Narayan Singh", role: "Associate Software Manager", reportsTo: "rajendra_prasad_m", avatar: "https://picsum.photos/100/100?grayscale&random=36", aiHint: "person avatar" },
        { id: "utsav_anand", name: "Utsav Anand", role: "Senior Software Engineer", reportsTo: "deep_narayan_singh", avatar: "https://picsum.photos/100/100?grayscale&random=37", aiHint: "person avatar" },
        { id: "kommireddi_naga_anvesh", name: "Kommireddi Naga Anvesh", role: "Software Engineer", reportsTo: "deep_narayan_singh", avatar: "https://picsum.photos/100/100?grayscale&random=38", aiHint: "person avatar" },
        { id: "dhanalakshmi_gante_shankar", name: "Dhanalakshmi Gante Shankar", role: "Associate Software Engineer", reportsTo: "deep_narayan_singh", avatar: "https://picsum.photos/100/100?grayscale&random=39", aiHint: "person avatar" },
    ],
    aircompliance: [
        { id: "Mathews_Pete", name: "Pete Mathews", role: "Sr Dir, Software Solutions", reportsTo: null, avatar: defaultAvatar, aiHint: "person avatar" },
        { id: "Sinnassamy_Anandaraj", name: "Anandaraj Sinnassamy", role: "Director, Software Engineering", reportsTo: "Mathews_Pete", avatar: defaultAvatar, aiHint: "person avatar" },
        { id: "Munagala_Avinash", name: "Avinash Munagala", role: "Associate Software Manager", reportsTo: "Sinnassamy_Anandaraj", avatar: defaultAvatar, aiHint: "person avatar" },
        { id: "S_Kavinilavu", name: "Kavinilavu S", role: "Software Engineer", reportsTo: "Munagala_Avinash", avatar: defaultAvatar, aiHint: "person avatar" },
        { id: "Wali_Shambhuling", name: "Shambhuling Wali", role: "Software Engineer", reportsTo: "Munagala_Avinash", avatar: defaultAvatar, aiHint: "person avatar" },
        { id: "Chintalapudi_Praveen_Raj_Kumar", name: "Praveen Raj Kumar Chintalapudi", role: "Senior Software Engineer", reportsTo: "Munagala_Avinash", avatar: defaultAvatar, aiHint: "person avatar" },
        { id: "Gururani_Kriti", name: "Kriti Gururani", role: "Software Engineer", reportsTo: "Munagala_Avinash", avatar: defaultAvatar, aiHint: "person avatar" },
        { id: "R_Shejan_Shriram", name: "Shejan Shriram R", role: "Associate Software Engineer", reportsTo: "Munagala_Avinash", avatar: defaultAvatar, aiHint: "person avatar" },
    ],
    pipeline: [
        { id: "Mathews_Pete", name: "Pete Mathews", role: "Sr Dir, Software Solutions", reportsTo: null, avatar: defaultAvatar, aiHint: "person avatar" },
        { id: "Prasad_M_Rajendra", name: "Rajendra Prasad M", role: "Director, Software Engineering", reportsTo: "Mathews_Pete", avatar: defaultAvatar, aiHint: "person avatar" },
        { id: "J_Kishor_Kumar", name: "Kishor Kumar J", role: "Software Manager", reportsTo: "Prasad_M_Rajendra", avatar: defaultAvatar, aiHint: "person avatar" },
        { id: "KE_Arjun_Sunil", name: "Arjun Sunil KE", role: "Senior Software Engineer", reportsTo: "J_Kishor_Kumar", avatar: defaultAvatar, aiHint: "person avatar" },
        { id: "Singh_Saurabh", name: "Saurabh Singh", role: "Software Engineer", reportsTo: "J_Kishor_Kumar", avatar: defaultAvatar, aiHint: "person avatar" },
        { id: "Kapti_Abdul_Mannan", name: "Abdul Mannan Kapti", role: "Senior Software Engineer", reportsTo: "J_Kishor_Kumar", avatar: defaultAvatar, aiHint: "person avatar" }
    ],
    analytics: [
        { id: "Mathews_Pete", name: "Pete Mathews", role: "Sr Dir, Software Solutions", reportsTo: null, avatar: defaultAvatar, aiHint: "person avatar" },
        { id: "Prasad_M_Rajendra", name: "Rajendra Prasad M", role: "Director, Software Engineering", reportsTo: "Mathews_Pete", avatar: defaultAvatar, aiHint: "person avatar" },
        { id: "J_Kishor_Kumar", name: "Kishor Kumar J", role: "Software Manager", reportsTo: "Prasad_M_Rajendra", avatar: defaultAvatar, aiHint: "person avatar" },
        { id: "KE_Arjun_Sunil", name: "Arjun Sunil KE", role: "Senior Software Engineer", reportsTo: "J_Kishor_Kumar", avatar: defaultAvatar, aiHint: "person avatar" },
        { id: "Singh_Saurabh", name: "Saurabh Singh", role: "Software Engineer", reportsTo: "J_Kishor_Kumar", avatar: defaultAvatar, aiHint: "person avatar" },
        { id: "Kapti_Abdul_Mannan", name: "Abdul Mannan Kapti", role: "Senior Software Engineer", reportsTo: "J_Kishor_Kumar", avatar: defaultAvatar, aiHint: "person avatar" }
    ],
    platform: [
        { id: "pete_mathews", name: "Pete Mathews", role: "Sr Dir, Software Solutions", reportsTo: null, avatar: defaultAvatar, aiHint: "person avatar" },
        { id: "anandaraj_sinnassamy", name: "Anandaraj Sinnassamy", role: "Director, Software Engineering", reportsTo: "pete_mathews", avatar: defaultAvatar, aiHint: "person avatar" },
        { id: "nishitha_lima_sequeira", name: "Nishitha Lima Sequeira", role: "Software Manager", reportsTo: "anandaraj_sinnassamy", avatar: defaultAvatar, aiHint: "person avatar" },
        { id: "sirisha_kandula", name: "Sirisha Kandula", role: "Senior Software Engineer", reportsTo: "nishitha_lima_sequeira", avatar: defaultAvatar, aiHint: "person avatar" },
        { id: "jabiulla_b", name: "Jabiulla B", role: "Software Engineer", reportsTo: "nishitha_lima_sequeira", avatar: defaultAvatar, aiHint: "person avatar" },
        { id: "mudassir_hussain_d", name: "Mudassir Hussain D", role: "Senior Software Engineer", reportsTo: "nishitha_lima_sequeira", avatar: defaultAvatar, aiHint: "person avatar" },
        { id: "shubham_anurag", name: "Shubham Anurag", role: "Associate Software Engineer", reportsTo: "nishitha_lima_sequeira", avatar: defaultAvatar, aiHint: "person avatar" },
        { id: "nitesh_ratishchandra_jha", name: "Nitesh Ratishchandra Jha", role: "Associate Software Engineer", reportsTo: "nishitha_lima_sequeira", avatar: defaultAvatar, aiHint: "person avatar" },
        { id: "pratidhi_chowdhury", name: "Pratidhi Chowdhury", role: "Software Engineer", reportsTo: "nishitha_lima_sequeira", avatar: defaultAvatar, aiHint: "person avatar" },
    ],
    default: [
        { id: "john", name: "John Doe", role: "Sr. Software Engineer", reportsTo: null, avatar: defaultAvatar, aiHint: "person avatar" },
        { id: "jane", name: "Jane Smith", role: "Product Manager", reportsTo: null, avatar: defaultAvatar, aiHint: "person avatar" },
        { id: "peter", name: "Peter Jones", role: "UX/UI Designer", reportsTo: null, avatar: defaultAvatar, aiHint: "person avatar" },
        { id: "new", name: "New Joiner", role: "Software Engineer", reportsTo: "jane", avatar: defaultAvatar, aiHint: "person avatar" },
    ]
};

export type TeamMember = {
    id: string;
    name: string;
    role: string;
    avatar: string;
    aiHint: string;
    reportsTo: string | null;
    children?: TeamMember[];
};







