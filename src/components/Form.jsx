import React, { useRef, useState } from "react";
import useData from "../hooks/hooks.js";
import { useNavigate } from "react-router-dom";

function generateRandomTrackingNumber() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let trackingNumber = "";

  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    trackingNumber += letters[1];
  }

  for (let i = 0; i < 7; i++) {
    trackingNumber += Math.floor(Math.random() * 10);
  }

  return trackingNumber;
}
generateRandomTrackingNumber();

function Form() {
  const [formData1, setForm1] = useState("");
  const [formData2, setForm2] = useState("");
  const [formData3, setForm3] = useState("");
  const [formData4, setForm4] = useState("");
  const [formData5, setForm5] = useState("");
  const [formData6, setForm6] = useState("");
  const [formData7, setForm7] = useState("");
  const [formData8, setForm8] = useState("");
  const [formData9, setForm9] = useState("");
  const [formData10, setForm10] = useState("");
  const [formData11, setForm11] = useState("");
  const [formData12, setForm12] = useState("");

  const { table, setTable } = useData();
  const { ship, setShip } = useData();

  const use = useNavigate();

  function onclk1() {
    const generatedTrackingNo = generateRandomTrackingNumber();
    table.push({
      refreanceNo: formData1,
      dispatchCity: formData2,
      consigneeName: formData3 + " " + formData4,
      consigneePhoneNumber: formData5,
      consigenEmail: formData6,
      consigneeAddreas: formData7,
      brand: formData8,
      consigneeCity: formData9,
      amount: formData10,
      financialStatus: formData11,
      remarks: formData12,
      trackingno: generatedTrackingNo,
      trackingStatus: "pending",
    });
    console.log(table);
    setTable(table);
    setShip(ship + 1);
    use("/shipment");
  }
  return (
    <div className="form" style={{ marginTop: "15rem" }}>
      <form onSubmit={onclk1}>
        <input
          type="number"
          placeholder="refrenec no"
          onChange={(e) => {
            setForm1(e.target.value);
          }}
        />
        <select
          name="Location"
          id="Location"
          required
          onChange={(e) => {
            setForm2(e.target.value);
          }}
        >
          <option value="" disabled selected>
            Select The City
          </option>
          <option value="Islamabad">Islamabad</option>
          <option value="" disabled>
            Punjab Cities
          </option>
          <option value="Ahmed Nager Chatha">Ahmed Nager Chatha</option>
          <option value="Ahmadpur East">Ahmadpur East</option>
          <option value="Ali Khan Abad">Ali Khan Abad</option>
          <option value="Alipur">Alipur</option>
          <option value="Arifwala">Arifwala</option>
          <option value="Attock">Attock</option>
          <option value="Bhera">Bhera</option>
          <option value="Bhalwal">Bhalwal</option>
          <option value="Bahawalnagar">Bahawalnagar</option>
          <option value="Bahawalpur">Bahawalpur</option>
          <option value="Bhakkar">Bhakkar</option>
          <option value="Burewala">Burewala</option>
          <option value="Chillianwala">Chillianwala</option>
          <option value="Chakwal">Chakwal</option>
          <option value="Chichawatni">Chichawatni</option>
          <option value="Chiniot">Chiniot</option>
          <option value="Chishtian">Chishtian</option>
          <option value="Daska">Daska</option>
          <option value="Darya Khan">Darya Khan</option>
          <option value="Dera Ghazi Khan">Dera Ghazi Khan</option>
          <option value="Dhaular">Dhaular</option>
          <option value="Dina">Dina</option>
          <option value="Dinga">Dinga</option>
          <option value="Dipalpur">Dipalpur</option>
          <option value="Faisalabad">Faisalabad</option>
          <option value="Ferozewala">Ferozewala</option>
          <option value="Fateh Jhang">Fateh Jang</option>
          <option value="Ghakhar Mandi">Ghakhar Mandi</option>
          <option value="Gojra">Gojra</option>
          <option value="Gujranwala">Gujranwala</option>
          <option value="Gujrat">Gujrat</option>
          <option value="Gujar Khan">Gujar Khan</option>
          <option value="Hafizabad">Hafizabad</option>
          <option value="Haroonabad">Haroonabad</option>
          <option value="Hasilpur">Hasilpur</option>
          <option value="Haveli Lakha">Haveli Lakha</option>
          <option value="Jatoi">Jatoi</option>
          <option value="Jalalpur">Jalalpur</option>
          <option value="Jattan">Jattan</option>
          <option value="Jampur">Jampur</option>
          <option value="Jaranwala">Jaranwala</option>
          <option value="Jhang">Jhang</option>
          <option value="Jhelum">Jhelum</option>
          <option value="Kalabagh">Kalabagh</option>
          <option value="Karor Lal Esan">Karor Lal Esan</option>
          <option value="Kasur">Kasur</option>
          <option value="Kamalia">Kamalia</option>
          <option value="Kamoke">Kamoke</option>
          <option value="Khanewal">Khanewal</option>
          <option value="Khanpur">Khanpur</option>
          <option value="Kharian">Kharian</option>
          <option value="Khushab">Khushab</option>
          <option value="Kot Addu">Kot Addu</option>
          <option value="Jauharabad">Jauharabad</option>
          <option value="Lahore">Lahore</option>
          <option value="Lalamusa">Lalamusa</option>
          <option value="Layyah">Layyah</option>
          <option value="Liaquat Pur">Liaquat Pur</option>
          <option value="Lodhran">Lodhran</option>
          <option value="Malakwal">Malakwal</option>
          <option value="Mamoori">Mamoori</option>
          <option value="Mailsi">Mailsi</option>
          <option value="Mandi Bahauddin">Mandi Bahauddin</option>
          <option value="Mian Channu">Mian Channu</option>
          <option value="Mianwali">Mianwali</option>
          <option value="Multan">Multan</option>
          <option value="Murree">Murree</option>
          <option value="Muridke">Muridke</option>
          <option value="Mianwali Bangla">Mianwali Bangla</option>
          <option value="Muzaffargarh">Muzaffargarh</option>
          <option value="Narowal">Narowal</option>
          <option value="Nankana Sahib">Nankana Sahib</option>
          <option value="Okara">Okara</option>
          <option value="Renala Khurd">Renala Khurd</option>
          <option value="Pakpattan">Pakpattan</option>
          <option value="Pattoki">Pattoki</option>
          <option value="Pir Mahal">Pir Mahal</option>
          <option value="Qaimpur">Qaimpur</option>
          <option value="Qila Didar Singh">Qila Didar Singh</option>
          <option value="Rabwah">Rabwah</option>
          <option value="Raiwind">Raiwind</option>
          <option value="Rajanpur">Rajanpur</option>
          <option value="Rahim Yar Khan">Rahim Yar Khan</option>
          <option value="Rawalpindi">Rawalpindi</option>
          <option value="Sadiqabad">Sadiqabad</option>
          <option value="Safdarabad">Safdarabad</option>
          <option value="Sahiwal">Sahiwal</option>
          <option value="Sangla Hill">Sangla Hill</option>
          <option value="Sarai Alamgir">Sarai Alamgir</option>
          <option value="Sargodha">Sargodha</option>
          <option value="Shakargarh">Shakargarh</option>
          <option value="Sheikhupura">Sheikhupura</option>
          <option value="Sialkot">Sialkot</option>
          <option value="Sohawa">Sohawa</option>
          <option value="Soianwala">Soianwala</option>
          <option value="Siranwali">Siranwali</option>
          <option value="Talagang">Talagang</option>
          <option value="Taxila">Taxila</option>
          <option value="Toba Tek Singh">Toba Tek Singh</option>
          <option value="Vehari">Vehari</option>
          <option value="Wah Cantonment">Wah Cantonment</option>
          <option value="Wazirabad">Wazirabad</option>
          <option value="" disabled>
            Sindh Cities
          </option>
          <option value="Badin">Badin</option>
          <option value="Bhirkan">Bhirkan</option>
          <option value="Rajo Khanani">Rajo Khanani</option>
          <option value="Chak">Chak</option>
          <option value="Dadu">Dadu</option>
          <option value="Digri">Digri</option>
          <option value="Diplo">Diplo</option>
          <option value="Dokri">Dokri</option>
          <option value="Ghotki">Ghotki</option>
          <option value="Haala">Haala</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Islamkot">Islamkot</option>
          <option value="Jacobabad">Jacobabad</option>
          <option value="Jamshoro">Jamshoro</option>
          <option value="Jungshahi">Jungshahi</option>
          <option value="Kandhkot">Kandhkot</option>
          <option value="Kandiaro">Kandiaro</option>
          <option value="Karachi">Karachi</option>
          <option value="Kashmore">Kashmore</option>
          <option value="Keti Bandar">Keti Bandar</option>
          <option value="Khairpur">Khairpur</option>
          <option value="Kotri">Kotri</option>
          <option value="Larkana">Larkana</option>
          <option value="Matiari">Matiari</option>
          <option value="Mehar">Mehar</option>
          <option value="Mirpur Khas">Mirpur Khas</option>
          <option value="Mithani">Mithani</option>
          <option value="Mithi">Mithi</option>
          <option value="Mehrabpur">Mehrabpur</option>
          <option value="Moro">Moro</option>
          <option value="Nagarparkar">Nagarparkar</option>
          <option value="Naudero">Naudero</option>
          <option value="Naushahro Feroze">Naushahro Feroze</option>
          <option value="Naushara">Naushara</option>
          <option value="Nawabshah">Nawabshah</option>
          <option value="Nazimabad">Nazimabad</option>
          <option value="Qambar">Qambar</option>
          <option value="Qasimabad">Qasimabad</option>
          <option value="Ranipur">Ranipur</option>
          <option value="Ratodero">Ratodero</option>
          <option value="Rohri">Rohri</option>
          <option value="Sakrand">Sakrand</option>
          <option value="Sanghar">Sanghar</option>
          <option value="Shahbandar">Shahbandar</option>
          <option value="Shahdadkot">Shahdadkot</option>
          <option value="Shahdadpur">Shahdadpur</option>
          <option value="Shahpur Chakar">Shahpur Chakar</option>
          <option value="Shikarpaur">Shikarpaur</option>
          <option value="Sukkur">Sukkur</option>
          <option value="Tangwani">Tangwani</option>
          <option value="Tando Adam Khan">Tando Adam Khan</option>
          <option value="Tando Allahyar">Tando Allahyar</option>
          <option value="Tando Muhammad Khan">Tando Muhammad Khan</option>
          <option value="Thatta">Thatta</option>
          <option value="Umerkot">Umerkot</option>
          <option value="Warah">Warah</option>
          <option value="" disabled>
            Khyber Cities
          </option>
          <option value="Abbottabad">Abbottabad</option>
          <option value="Adezai">Adezai</option>
          <option value="Alpuri">Alpuri</option>
          <option value="Akora Khattak">Akora Khattak</option>
          <option value="Ayubia">Ayubia</option>
          <option value="Banda Daud Shah">Banda Daud Shah</option>
          <option value="Bannu">Bannu</option>
          <option value="Batkhela">Batkhela</option>
          <option value="Battagram">Battagram</option>
          <option value="Birote">Birote</option>
          <option value="Chakdara">Chakdara</option>
          <option value="Charsadda">Charsadda</option>
          <option value="Chitral">Chitral</option>
          <option value="Daggar">Daggar</option>
          <option value="Dargai">Dargai</option>
          <option value="Darya Khan">Darya Khan</option>
          <option value="Dera Ismail Khan">Dera Ismail Khan</option>
          <option value="Doaba">Doaba</option>
          <option value="Dir">Dir</option>
          <option value="Drosh">Drosh</option>
          <option value="Hangu">Hangu</option>
          <option value="Haripur">Haripur</option>
          <option value="Karak">Karak</option>
          <option value="Kohat">Kohat</option>
          <option value="Kulachi">Kulachi</option>
          <option value="Lakki Marwat">Lakki Marwat</option>
          <option value="Latamber">Latamber</option>
          <option value="Madyan">Madyan</option>
          <option value="Mansehra">Mansehra</option>
          <option value="Mardan">Mardan</option>
          <option value="Mastuj">Mastuj</option>
          <option value="Mingora">Mingora</option>
          <option value="Nowshera">Nowshera</option>
          <option value="Paharpur">Paharpur</option>
          <option value="Pabbi">Pabbi</option>
          <option value="Peshawar">Peshawar</option>
          <option value="Saidu Sharif">Saidu Sharif</option>
          <option value="Shorkot">Shorkot</option>
          <option value="Shewa Adda">Shewa Adda</option>
          <option value="Swabi">Swabi</option>
          <option value="Swat">Swat</option>
          <option value="Tangi">Tangi</option>
          <option value="Tank">Tank</option>
          <option value="Thall">Thall</option>
          <option value="Timergara">Timergara</option>
          <option value="Tordher">Tordher</option>
          <option value="" disabled>
            Balochistan Cities
          </option>
          <option value="Awaran">Awaran</option>
          <option value="Barkhan">Barkhan</option>
          <option value="Chagai">Chagai</option>
          <option value="Dera Bugti">Dera Bugti</option>
          <option value="Gwadar">Gwadar</option>
          <option value="Harnai">Harnai</option>
          <option value="Jafarabad">Jafarabad</option>
          <option value="Jhal Magsi">Jhal Magsi</option>
          <option value="Kacchi">Kacchi</option>
          <option value="Kalat">Kalat</option>
          <option value="Kech">Kech</option>
          <option value="Kharan">Kharan</option>
          <option value="Khuzdar">Khuzdar</option>
          <option value="Killa Abdullah">Killa Abdullah</option>
          <option value="Killa Saifullah">Killa Saifullah</option>
          <option value="Kohlu">Kohlu</option>
          <option value="Lasbela">Lasbela</option>
          <option value="Lehri">Lehri</option>
          <option value="Loralai">Loralai</option>
          <option value="Mastung">Mastung</option>
          <option value="Musakhel">Musakhel</option>
          <option value="Nasirabad">Nasirabad</option>
          <option value="Nushki">Nushki</option>
          <option value="Panjgur">Panjgur</option>
          <option value="Pishin Valley">Pishin Valley</option>
          <option value="Quetta">Quetta</option>
          <option value="Sherani">Sherani</option>
          <option value="Sibi">Sibi</option>
          <option value="Sohbatpur">Sohbatpur</option>
          <option value="Washuk">Washuk</option>
          <option value="Zhob">Zhob</option>
          <option value="Ziarat">Ziarat</option>
        </select>
        <input
          type="text"
          placeholder="consignee first name"
          onChange={(e) => {
            setForm3(e.target.value);
          }}
          required
        />
        <input
          type="text"
          placeholder="last name"
          onChange={(e) => {
            setForm4(e.target.value);
          }}
          required
        />
        <input
          type="number"
          placeholder="consignee Phone Number"
          onChange={(e) => {
            setForm5(e.target.value);
          }}
          required
        />
        <input
          type="email"
          style={{ textTransform: "lowercase" }}
          placeholder=" consignee email"
          onChange={(e) => {
            setForm6(e.target.value);
          }}
          required
        />
        <input
          type="text "
          placeholder="consignee addreas "
          onChange={(e) => {
            setForm7(e.target.value);
          }}
          required
        />
        <input
          type="text"
          placeholder="brand"
          onChange={(e) => {
            setForm8(e.target.value);
          }}
        />
        <select
          name="Location"
          id="Location"
          required
          onChange={(e) => {
            setForm9(e.target.value);
          }}
        >
          <option value="" disabled selected>
            Select The City
          </option>
          <option value="Islamabad">Islamabad</option>
          <option value="" disabled>
            Punjab Cities
          </option>
          <option value="Ahmed Nager Chatha">Ahmed Nager Chatha</option>
          <option value="Ahmadpur East">Ahmadpur East</option>
          <option value="Ali Khan Abad">Ali Khan Abad</option>
          <option value="Alipur">Alipur</option>
          <option value="Arifwala">Arifwala</option>
          <option value="Attock">Attock</option>
          <option value="Bhera">Bhera</option>
          <option value="Bhalwal">Bhalwal</option>
          <option value="Bahawalnagar">Bahawalnagar</option>
          <option value="Bahawalpur">Bahawalpur</option>
          <option value="Bhakkar">Bhakkar</option>
          <option value="Burewala">Burewala</option>
          <option value="Chillianwala">Chillianwala</option>
          <option value="Chakwal">Chakwal</option>
          <option value="Chichawatni">Chichawatni</option>
          <option value="Chiniot">Chiniot</option>
          <option value="Chishtian">Chishtian</option>
          <option value="Daska">Daska</option>
          <option value="Darya Khan">Darya Khan</option>
          <option value="Dera Ghazi Khan">Dera Ghazi Khan</option>
          <option value="Dhaular">Dhaular</option>
          <option value="Dina">Dina</option>
          <option value="Dinga">Dinga</option>
          <option value="Dipalpur">Dipalpur</option>
          <option value="Faisalabad">Faisalabad</option>
          <option value="Ferozewala">Ferozewala</option>
          <option value="Fateh Jhang">Fateh Jang</option>
          <option value="Ghakhar Mandi">Ghakhar Mandi</option>
          <option value="Gojra">Gojra</option>
          <option value="Gujranwala">Gujranwala</option>
          <option value="Gujrat">Gujrat</option>
          <option value="Gujar Khan">Gujar Khan</option>
          <option value="Hafizabad">Hafizabad</option>
          <option value="Haroonabad">Haroonabad</option>
          <option value="Hasilpur">Hasilpur</option>
          <option value="Haveli Lakha">Haveli Lakha</option>
          <option value="Jatoi">Jatoi</option>
          <option value="Jalalpur">Jalalpur</option>
          <option value="Jattan">Jattan</option>
          <option value="Jampur">Jampur</option>
          <option value="Jaranwala">Jaranwala</option>
          <option value="Jhang">Jhang</option>
          <option value="Jhelum">Jhelum</option>
          <option value="Kalabagh">Kalabagh</option>
          <option value="Karor Lal Esan">Karor Lal Esan</option>
          <option value="Kasur">Kasur</option>
          <option value="Kamalia">Kamalia</option>
          <option value="Kamoke">Kamoke</option>
          <option value="Khanewal">Khanewal</option>
          <option value="Khanpur">Khanpur</option>
          <option value="Kharian">Kharian</option>
          <option value="Khushab">Khushab</option>
          <option value="Kot Addu">Kot Addu</option>
          <option value="Jauharabad">Jauharabad</option>
          <option value="Lahore">Lahore</option>
          <option value="Lalamusa">Lalamusa</option>
          <option value="Layyah">Layyah</option>
          <option value="Liaquat Pur">Liaquat Pur</option>
          <option value="Lodhran">Lodhran</option>
          <option value="Malakwal">Malakwal</option>
          <option value="Mamoori">Mamoori</option>
          <option value="Mailsi">Mailsi</option>
          <option value="Mandi Bahauddin">Mandi Bahauddin</option>
          <option value="Mian Channu">Mian Channu</option>
          <option value="Mianwali">Mianwali</option>
          <option value="Multan">Multan</option>
          <option value="Murree">Murree</option>
          <option value="Muridke">Muridke</option>
          <option value="Mianwali Bangla">Mianwali Bangla</option>
          <option value="Muzaffargarh">Muzaffargarh</option>
          <option value="Narowal">Narowal</option>
          <option value="Nankana Sahib">Nankana Sahib</option>
          <option value="Okara">Okara</option>
          <option value="Renala Khurd">Renala Khurd</option>
          <option value="Pakpattan">Pakpattan</option>
          <option value="Pattoki">Pattoki</option>
          <option value="Pir Mahal">Pir Mahal</option>
          <option value="Qaimpur">Qaimpur</option>
          <option value="Qila Didar Singh">Qila Didar Singh</option>
          <option value="Rabwah">Rabwah</option>
          <option value="Raiwind">Raiwind</option>
          <option value="Rajanpur">Rajanpur</option>
          <option value="Rahim Yar Khan">Rahim Yar Khan</option>
          <option value="Rawalpindi">Rawalpindi</option>
          <option value="Sadiqabad">Sadiqabad</option>
          <option value="Safdarabad">Safdarabad</option>
          <option value="Sahiwal">Sahiwal</option>
          <option value="Sangla Hill">Sangla Hill</option>
          <option value="Sarai Alamgir">Sarai Alamgir</option>
          <option value="Sargodha">Sargodha</option>
          <option value="Shakargarh">Shakargarh</option>
          <option value="Sheikhupura">Sheikhupura</option>
          <option value="Sialkot">Sialkot</option>
          <option value="Sohawa">Sohawa</option>
          <option value="Soianwala">Soianwala</option>
          <option value="Siranwali">Siranwali</option>
          <option value="Talagang">Talagang</option>
          <option value="Taxila">Taxila</option>
          <option value="Toba Tek Singh">Toba Tek Singh</option>
          <option value="Vehari">Vehari</option>
          <option value="Wah Cantonment">Wah Cantonment</option>
          <option value="Wazirabad">Wazirabad</option>
          <option value="" disabled>
            Sindh Cities
          </option>
          <option value="Badin">Badin</option>
          <option value="Bhirkan">Bhirkan</option>
          <option value="Rajo Khanani">Rajo Khanani</option>
          <option value="Chak">Chak</option>
          <option value="Dadu">Dadu</option>
          <option value="Digri">Digri</option>
          <option value="Diplo">Diplo</option>
          <option value="Dokri">Dokri</option>
          <option value="Ghotki">Ghotki</option>
          <option value="Haala">Haala</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Islamkot">Islamkot</option>
          <option value="Jacobabad">Jacobabad</option>
          <option value="Jamshoro">Jamshoro</option>
          <option value="Jungshahi">Jungshahi</option>
          <option value="Kandhkot">Kandhkot</option>
          <option value="Kandiaro">Kandiaro</option>
          <option value="Karachi">Karachi</option>
          <option value="Kashmore">Kashmore</option>
          <option value="Keti Bandar">Keti Bandar</option>
          <option value="Khairpur">Khairpur</option>
          <option value="Kotri">Kotri</option>
          <option value="Larkana">Larkana</option>
          <option value="Matiari">Matiari</option>
          <option value="Mehar">Mehar</option>
          <option value="Mirpur Khas">Mirpur Khas</option>
          <option value="Mithani">Mithani</option>
          <option value="Mithi">Mithi</option>
          <option value="Mehrabpur">Mehrabpur</option>
          <option value="Moro">Moro</option>
          <option value="Nagarparkar">Nagarparkar</option>
          <option value="Naudero">Naudero</option>
          <option value="Naushahro Feroze">Naushahro Feroze</option>
          <option value="Naushara">Naushara</option>
          <option value="Nawabshah">Nawabshah</option>
          <option value="Nazimabad">Nazimabad</option>
          <option value="Qambar">Qambar</option>
          <option value="Qasimabad">Qasimabad</option>
          <option value="Ranipur">Ranipur</option>
          <option value="Ratodero">Ratodero</option>
          <option value="Rohri">Rohri</option>
          <option value="Sakrand">Sakrand</option>
          <option value="Sanghar">Sanghar</option>
          <option value="Shahbandar">Shahbandar</option>
          <option value="Shahdadkot">Shahdadkot</option>
          <option value="Shahdadpur">Shahdadpur</option>
          <option value="Shahpur Chakar">Shahpur Chakar</option>
          <option value="Shikarpaur">Shikarpaur</option>
          <option value="Sukkur">Sukkur</option>
          <option value="Tangwani">Tangwani</option>
          <option value="Tando Adam Khan">Tando Adam Khan</option>
          <option value="Tando Allahyar">Tando Allahyar</option>
          <option value="Tando Muhammad Khan">Tando Muhammad Khan</option>
          <option value="Thatta">Thatta</option>
          <option value="Umerkot">Umerkot</option>
          <option value="Warah">Warah</option>
          <option value="" disabled>
            Khyber Cities
          </option>
          <option value="Abbottabad">Abbottabad</option>
          <option value="Adezai">Adezai</option>
          <option value="Alpuri">Alpuri</option>
          <option value="Akora Khattak">Akora Khattak</option>
          <option value="Ayubia">Ayubia</option>
          <option value="Banda Daud Shah">Banda Daud Shah</option>
          <option value="Bannu">Bannu</option>
          <option value="Batkhela">Batkhela</option>
          <option value="Battagram">Battagram</option>
          <option value="Birote">Birote</option>
          <option value="Chakdara">Chakdara</option>
          <option value="Charsadda">Charsadda</option>
          <option value="Chitral">Chitral</option>
          <option value="Daggar">Daggar</option>
          <option value="Dargai">Dargai</option>
          <option value="Darya Khan">Darya Khan</option>
          <option value="Dera Ismail Khan">Dera Ismail Khan</option>
          <option value="Doaba">Doaba</option>
          <option value="Dir">Dir</option>
          <option value="Drosh">Drosh</option>
          <option value="Hangu">Hangu</option>
          <option value="Haripur">Haripur</option>
          <option value="Karak">Karak</option>
          <option value="Kohat">Kohat</option>
          <option value="Kulachi">Kulachi</option>
          <option value="Lakki Marwat">Lakki Marwat</option>
          <option value="Latamber">Latamber</option>
          <option value="Madyan">Madyan</option>
          <option value="Mansehra">Mansehra</option>
          <option value="Mardan">Mardan</option>
          <option value="Mastuj">Mastuj</option>
          <option value="Mingora">Mingora</option>
          <option value="Nowshera">Nowshera</option>
          <option value="Paharpur">Paharpur</option>
          <option value="Pabbi">Pabbi</option>
          <option value="Peshawar">Peshawar</option>
          <option value="Saidu Sharif">Saidu Sharif</option>
          <option value="Shorkot">Shorkot</option>
          <option value="Shewa Adda">Shewa Adda</option>
          <option value="Swabi">Swabi</option>
          <option value="Swat">Swat</option>
          <option value="Tangi">Tangi</option>
          <option value="Tank">Tank</option>
          <option value="Thall">Thall</option>
          <option value="Timergara">Timergara</option>
          <option value="Tordher">Tordher</option>
          <option value="" disabled>
            Balochistan Cities
          </option>
          <option value="Awaran">Awaran</option>
          <option value="Barkhan">Barkhan</option>
          <option value="Chagai">Chagai</option>
          <option value="Dera Bugti">Dera Bugti</option>
          <option value="Gwadar">Gwadar</option>
          <option value="Harnai">Harnai</option>
          <option value="Jafarabad">Jafarabad</option>
          <option value="Jhal Magsi">Jhal Magsi</option>
          <option value="Kacchi">Kacchi</option>
          <option value="Kalat">Kalat</option>
          <option value="Kech">Kech</option>
          <option value="Kharan">Kharan</option>
          <option value="Khuzdar">Khuzdar</option>
          <option value="Killa Abdullah">Killa Abdullah</option>
          <option value="Killa Saifullah">Killa Saifullah</option>
          <option value="Kohlu">Kohlu</option>
          <option value="Lasbela">Lasbela</option>
          <option value="Lehri">Lehri</option>
          <option value="Loralai">Loralai</option>
          <option value="Mastung">Mastung</option>
          <option value="Musakhel">Musakhel</option>
          <option value="Nasirabad">Nasirabad</option>
          <option value="Nushki">Nushki</option>
          <option value="Panjgur">Panjgur</option>
          <option value="Pishin Valley">Pishin Valley</option>
          <option value="Quetta">Quetta</option>
          <option value="Sherani">Sherani</option>
          <option value="Sibi">Sibi</option>
          <option value="Sohbatpur">Sohbatpur</option>
          <option value="Washuk">Washuk</option>
          <option value="Zhob">Zhob</option>
          <option value="Ziarat">Ziarat</option>
        </select>
        <input
          type="number"
          placeholder="amount"
          onChange={(e) => {
            setForm10(e.target.value);
          }}
          required
        />
        <input
          type="text"
          placeholder="financial status"
          onChange={(e) => {
            setForm11(e.target.value);
          }}
          required
        />
        <input
          type="text"
          placeholder="remarks"
          onChange={(e) => {
            setForm12(e.target.value);
          }}
          required
        />

        <button className="btnn">Add item</button>
      </form>
    </div>
  );
}

export default Form;
