import React, { useState } from 'react';
import '../firmprofile/css/FirmProfile.css';  // Import the CSS file

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
    "Punjab": ["Amritsar","Barnala","Bathinda","Fatehgarh Sahib","Fazilka","Ferozepur","Gurdaspur","Hoshiarpur","Jalandhar","Kapurthala","Ludhiana","Mansa","Moga","Muktsar","Pathankot","Patiala","Rupnagar","Sangrur","SAS Nagar","SBS Nagar","Sri Muktsar Sahib","Tarn Taran"],
    "Rajasthan": ["Ajmer","Alwar","Banswara","Baran","Barmer","Bharatpur","Bhilwara","Bikaner","Bundi","Chittorgarh","Churu","Dausa","Dholpur","Dungarpur","Hanumangarh","Jaipur","Jaisalmer","Jalore","Jhalawar","Jhunjhunu","Jodhpur","Karauli","Nagaur","Pali","Rajsamand","Sawai Madhopur","Sikar","Sirohi","Tonk","Udaipur"],
    "Sikkim": ["East Sikkim","North Sikkim","South Sikkim","West Sikkim"],
    "Tamil Nadu": ["Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode","Kanchipuram","Kanyakumari","Karur","Krishnagiri","Madurai","Nagapattinam","Namakkal","Perambalur","Pudukkottai","Ramanathapuram","Salem","Sivaganga","Tiruchirappalli","Tirunelveli","Tiruppur","Tiruvallur","Tiruvannamalai","Vellore","Viluppuram","Virudhunagar"],
    "Telangana": ["Adilabad","Bhadradri Kothagudem","Hyderabad","Jagtial","Jangaon","Jaya Shankar Bhupalpally","Jogulamba Gadwal","Kamareddy","Karimnagar","Khammam","Mahabubabad","Mahabubnagar","Mancherial","Medak","Medchal-Malkajgiri","Nalgonda","Narayanpet","Nirmal","Nizamabad","Peddapalli","Rajanna Sircilla","Rangareddy","Sangareddy","Warangal (Rural)","Warangal (Urban)","Wanaparthy","Yadadri Bhuvanagiri"],
    "Tripura": ["Dhalai","Khowai","North Tripura","Sepahijala","South Tripura","Unakoti","West Tripura"],
    "Uttar Pradesh": ["Agra","Aligarh","Allahabad","Ambedkar Nagar","Amethi","Amroha","Auraiya","Azamgarh","Badaun","Baghpat","Bahraich","Ballia","Balrampur","Banda","Barabanki","Bareilly","Basti","Bhadohi","Bijnor","Budaun","Bulandshahr","Chandauli","Chitrakoot","Deoria","Etah","Etawah","Faizabad","Farrukhabad","Fatehpur","Firozabad","Gautam Buddha Nagar","Ghaziabad","Gonda","Gorakhpur","Hapur","Hardoi","Hathras","Jalaun","Jaunpur","Jhansi","Kannauj","Kanpur","Kasganj","Katihar","Kaushambi","Kheri","Kushinagar","Lakhimpur Kheri","Lalitpur","Lucknow","Maharajganj","Mahoba","Mainpuri","Mathura","Mau","Meerut","Mirzapur","Moradabad","Muzaffarnagar","Pilibhit","Pratapgarh","Raebareli","Rampur","Rashtriya Ekta","Saharanpur","Sambhal","Sant Kabir Nagar","Shahjahanpur","Shamli","Shravasti","Siddharthnagar","Sitapur","Sonbhadra","Sultanpur","Unnao","Varanasi"],
    "Uttarakhand": ["Almora","Bageshwar","Chamoli","Champawat","Dehradun","Haridwar","Nainital","Pauri Garhwal","Pithoragarh","Rudraprayag","Tehri Garhwal","Uttarkashi"],
    "West Bengal": ["Alipurduar","Bankura","Birbhum","Burdwan","Cooch Behar","Dakshin Dinajpur","Darjeeling","Hooghly","Howrah","Jalpaiguri","Jhargram","Kalimpong","Kolkata","Malda","Murmugao","Nadia","North 24 Parganas","Paschim Medinipur","Purba Medinipur","Purulia","South 24 Parganas","Uttar Dinajpur"]
  };

  const FirmProfileForm = () => {
    const [profile, setProfile] = useState({
      companyName: '',
      subtitle: '',
      logo: '',
      officeNumber: '',
      state: '',
      district: '',
      locality: '',
      street: '',
      city: '',
      pincode: ''
    });
  
    const [districts, setDistricts] = useState([]);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setProfile((prevProfile) => ({
        ...prevProfile,
        [name]: value,
      }));
    };
  
    const handleStateChange = (e) => {
      const selectedState = e.target.value;
      setProfile((prevProfile) => ({
        ...prevProfile,
        state: selectedState,
        district: ''  // Reset district when state changes
      }));
      setDistricts(statesAndDistricts[selectedState] || []);
    };
  
    const handleDistrictChange = (e) => {
      const selectedDistrict = e.target.value;
      setProfile((prevProfile) => ({
        ...prevProfile,
        district: selectedDistrict
      }));
    };
  
    return (
      <div className="firm-profile-form-wrapper">  {/* Wrapper for scrolling */}
        <div className="firm-profile-form-container">
  
          {/* Start of Form Row */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                name="companyName"
                id="companyName"
                value={profile.companyName}
                onChange={handleChange}
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="logo">Company Logo</label>
              <input
                type="file"
                name="logo"
                id="logo"
                accept="image/*"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="subtitle">Subtitle</label>
              <input
                type="text"
                name="subtitle"
                id="subtitle"
                value={profile.subtitle}
                onChange={handleChange}
              />
            </div>
          </div>
          {/* End of Form Row */}
  
          <div className="form-group">
            <label htmlFor="officeNumber">Office Number</label>
            <input
              type="text"
              name="officeNumber"
              id="officeNumber"
              value={profile.officeNumber}
              onChange={handleChange}
            />
          </div>
  
          <div className="form-address-group">
            <div className="form-group">
              <label htmlFor="state">State</label>
              <select
                name="state"
                id="state"
                value={profile.state}
                onChange={handleStateChange}
                required
              >
                <option value="">Select a state</option>
                {Object.keys(statesAndDistricts).map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="district">District</label>
              <select
                name="district"
                id="district"
                value={profile.district}
                onChange={handleDistrictChange}
                disabled={!profile.state}
                required
              >
                <option value="">Select a district</option>
                {districts.map(district => (
                  <option key={district} value={district}>{district}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="locality">Locality</label>
              <input
                type="text"
                name="locality"
                id="locality"
                value={profile.locality}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="street">Street</label>
              <input
                type="text"
                name="street"
                id="street"
                value={profile.street}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                id="city"
                value={profile.city}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pincode">Pincode</label>
              <input
                type="text"
                name="pincode"
                id="pincode"
                value={profile.pincode}
                onChange={handleChange}
              />
            </div>
          </div>
  
          <div className="submit-btn">
            <button>Submit</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default FirmProfileForm;
