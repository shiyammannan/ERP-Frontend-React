import React, { useState, useEffect } from "react";

const statesAndDistricts = {
  "Andhra Pradesh": ["Anantapur","Chittoor","East Godavari","Guntur", "Krishna","Kurnool","Nellore","Prakasam","Srikakulam","Visakhapatnam","Vizianagaram","West Godavari","YSR Kadapa"],
  "Arunachal Pradesh": ["Anjaw","Changlang","East Kameng","East Siang","Kamle","Kra Daadi","Kurung Kumey","Lepa Rada","Lohit","Longding","Lower Dibang Valley","Lower Siang","Lower Subansiri","Namsai","Pakke Kessang","Papum Pare","Shi Yomi","Siang","Tawang","Tirap","Upper Dibang Valley","Upper Siang","Upper Subansiri","West Kameng","West Siang"],
  "Assam": ["Baksa","Barpeta","Biswanath","Bongaigaon","Cachar","Charaideo","Chirang","Darrang","Dhemaji","Dhubri","Dibrugarh","Dima Hasao","Goalpara","Golaghat","Hailakandi","Hojai","Jorhat","Kamrup","Kamrup Metropolitan","Karbi Anglong","Karimganj","Kokrajhar","Lakhimpur","Majuli","Morigaon","Nagaon","Nalbari","Sivasagar","Sonitpur","South Salmara-Mankachar","Tinsukia","Udalguri","West Karbi Anglong"],
  "Bihar": ["Araria","Arwal","Aurangabad","Banka","Begusarai","Bhagalpur","Bhojpur","Buxar","Darbhanga","East Champaran","Gaya","Gopalganj","Jamui","Jehanabad","Kaimur","Katihar","Khagaria","Kishanganj","Lakhisarai","Madhepura","Madhubani","Munger","Muzaffarpur","Nalanda","Nawada","Patna","Purnia","Rohtas","Saharsa","Samastipur","Saran","Sheikhpura","Sheohar","Sitamarhi","Siwan","Supaul","Vaishali","West Champaran"],
  "Chhattisgarh": ["Balod","Baloda Bazar","Balrampur","Bastar","Bemetara","Bijapur","Bilaspur","Dantewada","Dhamtari","Durg","Gariaband","Gaurela-Pendra-Marwahi","Janjgir-Champa","Jashpur","Kabirdham","Kanker","Kondagaon","Korba","Koriya","Mahasamund","Mungeli","Narayanpur","Raigarh","Raipur","Rajnandgaon","Sukma","Surajpur","Surguja"],
  "Goa": ["North Goa","South Goa"],
  "Gujarat": ["Ahmedabad","Amreli","Anand","Aravalli","Banaskantha","Bharuch","Bhavnagar","Botad","Chhota Udaipur","Dahod","Dang","Devbhoomi Dwarka","Gandhinagar","Gir Somnath","Jamnagar","Junagadh","Kheda","Kutch","Mahisagar","Mehsana","Morbi","Narmada","Navsari","Panchmahal","Patan","Porbandar","Rajkot","Sabarkantha","Surat","Surendranagar","Tapi","Vadodara","Valsad"],
  "Haryana": ["Ambala","Bhiwani","Charkhi Dadri","Faridabad","Fatehabad","Gurugram","Hisar","Jhajjar","Jind","Kaithal","Karnal","Kurukshetra","Mahendragarh","Mewat","Palwal","Panchkula","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamunanagar"],
  "Himachal Pradesh": ["Bilaspur","Chamba","Hamirpur","Kangra","Kinnaur","Kullu","Lahaul and Spiti","Mandi","Shimla","Sirmaur","Solan","Una"],
  "Jharkhand": ["Bokaro","Chatra","Deoghar","Dhanbad","Dumka","East Singhbhum","Garhwa","Giridih","Godda","Gumla","Hazaribagh","Jamtara","Khunti","Koderma","Latehar","Lohardaga","Pakur","Palamu","Ramgarh","Ranchi","Sahebganj","Seraikela Kharsawan","Simdega","West Singhbhum"],
  "Karnataka": ["Bagalkot","Ballari","Belagavi","Bengaluru Rural","Bengaluru Urban","Bidar","Chamarajanagar","Chikkaballapur","Chikkamagaluru","Chitradurga","Dakshina Kannada","Davanagere","Dharwad","Gadag","Hassan","Haveri","Kalaburagi","Kodagu","Kolar","Koppal","Mandya","Mysuru","Raichur","Ramanagara","Shivamogga","Tumakuru","Udupi","Uttara Kannada","Vijayapura","Yadgir"],
  "Kerala": ["Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta","Thiruvananthapuram","Thrissur","Wayanad"],
  "Madhya Pradesh": ["Agar Malwa","Alirajpur","Anuppur","Ashoknagar","Balaghat","Barwani","Betul","Bhind","Bhopal","Burhanpur","Chachaura","Chhatarpur","Chhindwara","Damoh","Datia","Dewas","Dhar","Dindori","Guna","Gwalior","Harda","Hoshangabad","Indore","Jabalpur","Jhabua","Katni","Khandwa","Khargone","Maihar","Mandla","Mandsaur","Morena","Narmadapuram","Narsinghpur","Neemuch","Niwari","Panna","Raisen","Raisen","Rajgarh","Ratlam","Rewa","Sagar","Satna","Sehore","Seoni","Shahdol","Shajapur","Sheopur","Shivpuri","Sidhi","Singrauli","Tikamgarh","Ujjain","Vidisha"],
  "Maharashtra": ["Ahmednagar","Akola","Amravati","Aurangabad","Beed","Bhandara","Buldhana","Chandrapur","Dhule","Gadchiroli","Gondia","Hingoli","Jalgaon","Jalna","Kolhapur","Latur","Mumbai City","Mumbai Suburban","Nagpur","Nanded","Nandurbar","Nashik","Osmanabad","Palghar","Parbhani","Pune","Raigad","Ratnagiri","Satara","Sindhudurg","Solapur","Thane","Wardha","Washim","Yavatmal"],
  "Manipur": ["Bishnupur","Churachandpur","Chandel","Imphal East","Imphal West","Jiribam","Kakching","Kangpokpi","Noney","Senapati","Tamenglong","Thoubal","Ukhrul"],
  "Meghalaya": ["East Garo Hills","East Khasi Hills","Jaintia Hills","Ri-Bhoi","South Garo Hills","South West Garo Hills","South West Khasi Hills","West Garo Hills","West Khasi Hills"],
  "Mizoram": ["Aizawl","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip"],
  "Nagaland": ["Dimapur","Kiphire","Kohima","Longleng","Mokokchung","Mon","Phek","Tuensang","Wokha","Zunheboto"],
  "Odisha": ["Angul","Bargarh","Boudh","Cuttack","Deogarh","Dhenkanal","Ganjam","Gajapati","Jagatsinghpur","Jajpur","Jharsuguda","Kalahandi","Kandhamal","Kendrapara","Kendujhar","Khurda","Koraput","Malkangiri","Nabarangpur","Nayagarh","Nuapada","Rayagada","Sambalpur","Sonepur","Sundargarh"],
  "Puducherry": ["Karaikal","Mahe","Puducherry","Yanam"],
  "Punjab": ["Amritsar","Barnala","Bathinda","Faridkot","Fatehgarh Sahib","Fazilka","Ferozepur","Hoshiarpur","Jalandhar","Kapurthala","Ludhiana","Mansa","Moga","Mohali","Muktsar","Nawanshahr","Pathankot","Patiala","Rupnagar","S.A.S. Nagar","Sangrur","Tarn Taran"],
  "Rajasthan": ["Ajmer","Alwar","Banswara","Baran","Barmer","Bharatpur","Bhilwara","Bikaner","Bundi","Chittorgarh","Dausa","Dholpur","Dungarpur","Hanumangarh","Jaipur","Jaisalmer","Jalore","Jhalawar","Jhunjhunu","Jodhpur","Karauli","Nagaur","Pali","Rajsamand","Sawai Madhopur","Sikar","Sirohi","Tonk","Udaipur"],
  "Sikkim": ["East Sikkim","North Sikkim","South Sikkim","West Sikkim"],
  "Tamil Nadu": ["Ariyalur","Chengalpattu","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode","Kallakurichi","Kancheepuram","Kanyakumari","Karur","Krishnagiri","Madurai","Nagapattinam","Namakkal","Nilgiris","Perambalur","Pudukottai","Ramanathapuram","Salem","Sivaganga","Tenkasi","Thanjavur","The Nilgiris","Tiruchirappalli","Tirunelveli","Tirupathur","Tiruppur","Tiruvallur","Tiruvannamalai","Vellore","Viluppuram","Virudhunagar"],
  "Telangana": ["Adilabad","Bhadradri Kothagudem","Hyderabad","Jagtial","Jangaon","Jayashankar Bhupalpally","Jogulamba Gadwal","Kamareddy","Karimnagar","Khammam","Komaram Bheem","Mahabubabad","Mahabubnagar","Mancherial","Medak","Medchal","Nagarkurnool","Nalgonda","Nirmal","Nizamabad","Peddapalli","Rajanna Sircilla","Ranga Reddy","Sangareddy","Warangal (Rural)","Warangal (Urban)","Wanaparthy","Yadadri Bhuvanagiri"],
  "Tripura": ["Dhalai","Gomati","Khowai","North Tripura","Sepahijala","South Tripura","Unakoti","West Tripura"],
  "Uttar Pradesh": ["Agra","Aligarh","Allahabad","Ambedkar Nagar","Auraiya","Azamgarh","Badaun","Baghpat","Bahraich","Ballia","Balrampur","Banda","Barabanki","Bareilly","Basti","Bhadohi","Bijnor","Budaun","Bulandshahr","Chandauli","Chitrakoot","Deoria","Etah","Etawah","Faizabad","Farrukhabad","Fatehpur","Firozabad","Gautam Buddha Nagar","Ghaziabad","Ghazipur","Gonda","Gorakhpur","Hamirpur","Hapur","Hardoi","Hathras","Jalaun","Jaunpur","Jhansi","Kannauj","Kanpur","Kaushambi","Kushinagar","Lalitpur","Lucknow","Mau","Meerut","Mirzapur","Moradabad","Muzaffarnagar","Pilibhit","Pratapgarh","Rae Bareli","Rampur","Saharanpur","Sambhal","Sant Kabir Nagar","Shahjahanpur","Shamli","Shravasti","Siddharthnagar","Sitapur","Sonbhadra","Sultanpur","Unnao","Varanasi"],
  "Uttarakhand": ["Almora","Bageshwar","Chamoli","Champawat","Dehradun","Haridwar","Nainital","Pauri Garhwal","Pithoragarh","Rudraprayag","Tehri Garhwal","Udham Singh Nagar","Uttarkashi"],
  "West Bengal": ["Alipurduar","Bankura","Bardhaman","Birbhum","Cooch Behar","Dakshin Dinajpur","Darjeeling","Hooghly","Howrah","Jalpaiguri","Jhargram","Kalimpong","Kolkata","Malda","Murshidabad","Nadia","North 24 Parganas","Paschim Bardhaman","Paschim Medinipur","Purba Bardhaman","Purba Medinipur","South 24 Parganas","Uttar Dinajpur"]
};

const PersonalDetails = () => {
  const [selectedState, setSelectedState] = useState("");
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    if (selectedState) {
      setDistricts(statesAndDistricts[selectedState]);
    } else {
      setDistricts([]);
    }
  }, [selectedState]);

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  return (
    <form className="flex flex-wrap w-full">
      <div className="flex flex-wrap w-full">
        <div className="mb-7 w-full lg:w-1/2 pr-4">
          <label htmlFor="firstName" className="block text-sm font-semibold mb-1">First Name</label>
          <input type="text" id="firstName" name="admission_firstname"placeholder="Enter your first name" className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
        </div>
        <div className="mb-7 w-full lg:w-1/2 pl-4">
          <label htmlFor="lastName" className="block text-sm font-semibold mb-1">Last Name</label>
          <input type="text" id="lastName" name="admission_lastname" placeholder="Enter your last name" className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
        </div>
      </div>
      <div className="flex flex-wrap w-full">
        <div className="mb-7 w-full lg:w-1/2 pr-4">
          <label htmlFor="dateofbirth" className="block text-sm font-semibold mb-1">Date of Birth</label>
          <input type="date" id="dateofbirth" name="admission_date" placeholder="Enter your DOB" className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
        </div>
        <div className="mb-7 w-full lg:w-1/2 pl-4">
          <label htmlFor="gender" className="block text-sm font-semibold mb-1">Gender</label>
          <select id="gender" name="admission_gender" className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
            <option value="">Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap w-full">
        <div className="mb-7 w-full lg:w-1/2 pr-4">
          <label htmlFor="phoneNumber" className="block text-sm font-semibold mb-1">Phone Number</label>
          <input type="text" id="phoneNumber" name="admission_phonenumber" placeholder="Enter your phone number" className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
        </div>
        <div className="mb-7 w-full lg:w-1/2 pl-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-1">E-mail ID</label>
          <input type="text" id="email" name="admission_mailid" placeholder="Enter your email address" className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
        </div>
      </div>
      <div className="flex flex-wrap w-full">
        <div className="mb-7 w-full lg:w-1/2 pr-4">
          <label htmlFor="street" className="block text-sm font-semibold mb-1">Street</label>
          <input type="text" id="street" name="admission_street" placeholder="Enter your Street" className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
        </div>
        <div className="mb-7 w-full lg:w-1/2 pl-4">
          <label htmlFor="locality" className="block text-sm font-semibold mb-1">Locality</label>
          <input type="text" id="locality" name="admission_locality" placeholder="Enter your locality" className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
        </div>
      </div>
      <div className="flex flex-wrap w-full">
        <div className="mb-7 w-full lg:w-1/2 pr-4">
          <label htmlFor="state" className="block text-sm font-semibold mb-1">State</label>
          <select id="state" value={selectedState} onChange={handleStateChange} name="admission_state" className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
            <option value="">Select your state</option>
            {Object.keys(statesAndDistricts).map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>
        <div className="mb-7 w-full lg:w-1/2 pl-4">
          <label htmlFor="district" className="block text-sm font-semibold mb-1">District</label>
          <select id="district" name="admission_district" className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
            <option value="">Select your district</option>
            {districts.map((district) => (
              <option key={district} value={district}>{district}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-wrap w-full">
        <div className="mb-7 w-full lg:w-1/2 pr-4">
          <label htmlFor="city" className="block text-sm font-semibold mb-1">City</label>
          <input type="text" id="city" name="admission_city"  placeholder="Enter your City " className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
        </div>
        <div className="mb-7 w-full lg:w-1/2 pl-4">
          <label htmlFor="pincode" className="block text-sm font-semibold mb-1">Pin-Code</label>
          <input type="text" id="pincode" name="admission_pincode"  placeholder="Enter your Pin-Code " className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
        </div>
      </div>
      <div className="flex flex-wrap w-full">
        <div className="mb-7 w-full lg:w-1/2 pr-4">
          <label htmlFor="fatherName" className="block text-sm font-semibold mb-1">Father's Name</label>
          <input type="text" id="fatherName" name="admission_fathername"  placeholder="Enter your Father's Name" className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
        </div>
        <div className="mb-7 w-full lg:w-1/2 pl-4">
          <label htmlFor="fatherNumber" className="block text-sm font-semibold mb-1">Father's Number</label>
          <input type="text" id="fatherNumber" name="admission_fathernumber" placeholder="Enter your Father's Number" className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
        </div>
      </div>
      <div className="flex flex-wrap w-full">
        <div className="mb-7 w-full lg:w-1/2 pr-4">
          <label htmlFor="fatherOccupation" className="block text-sm font-semibold mb-1">Father's Occupation</label>
          <input type="text" id="fatherOccupation" name="admission_fatheroccupation"  placeholder="Enter your Father's Occupation" className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
        </div>
        <div className="mb-7 w-full lg:w-1/2 pl-4">
          <label htmlFor="motherName" className="block text-sm font-semibold mb-1">Mother's Name</label>
          <input type="text" id="motherName" name="admission_mothername" placeholder="Enter your Mother's Name" className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
        </div>
      </div>
      <div className="flex flex-wrap w-full">
        <div className="mb-7 w-full lg:w-1/2 pr-4">
          <label htmlFor="motherNumber" className="block text-sm font-semibold mb-1">Mother's Number</label>
          <input type="text" id="motherNumber" name="admission_mothernumber"  placeholder="Enter your Mother's Number" className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
        </div>
        <div className="mb-7 w-full lg:w-1/2 pl-4">
          <label htmlFor="fatherOccupation" className="block text-sm font-semibold mb-1">Mother's Occupation</label>
          <input type="text" id="fatherOccupation" name="admission_motheroccupation"  placeholder="Enter your Father's Occupation" className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
        </div>
      </div>
      <div className="flex flex-wrap w-full">
        
      </div>
      <div className="flex flex-wrap w-full">
  <div className="mb-7 w-full lg:w-1/2 pr-4">
    <label htmlFor="profilepic" className="block text-sm font-semibold mb-1">Profile Picture</label>
    <input
      type="file"
      id="profilepic"
      accept=".jpeg, .jpg, .png"
      className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
    />
  </div>
</div>

    </form>
  );
};

export default PersonalDetails;
