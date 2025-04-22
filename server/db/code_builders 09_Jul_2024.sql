-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 09, 2024 at 02:50 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `code_builders`
--

-- --------------------------------------------------------

--
-- Table structure for table `cb_in_admission`
--

CREATE TABLE `cb_in_admission` (
  `admission_id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone_number` varchar(15) NOT NULL,
  `address_street` varchar(255) NOT NULL,
  `address_district` varchar(50) NOT NULL,
  `address_state` varchar(50) NOT NULL,
  `address_pincode` varchar(10) NOT NULL,
  `father_name` varchar(255) DEFAULT NULL,
  `mother_name` varchar(255) DEFAULT NULL,
  `father_phone_number` varchar(15) DEFAULT NULL,
  `mother_phone_number` varchar(15) DEFAULT NULL,
  `pic` text DEFAULT NULL,
  `sslc_percentage` decimal(5,2) DEFAULT NULL,
  `hsc_percentage` decimal(5,2) DEFAULT NULL,
  `diploma_percentage` decimal(5,2) DEFAULT NULL,
  `college_institution_name` varchar(255) DEFAULT NULL,
  `degree` varchar(50) DEFAULT NULL,
  `department` varchar(50) DEFAULT NULL,
  `current_year_of_college` varchar(10) DEFAULT NULL,
  `passed_out_year` int(11) DEFAULT NULL,
  `cgpa` decimal(5,2) DEFAULT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `status` varchar(20) DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cb_in_batch`
--

CREATE TABLE `cb_in_batch` (
  `id` int(11) NOT NULL,
  `batch_code` varchar(50) NOT NULL,
  `batch_name` varchar(255) NOT NULL,
  `student_count` int(11) DEFAULT 0,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_by` varchar(50) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cb_in_course`
--

CREATE TABLE `cb_in_course` (
  `course_id` int(11) NOT NULL,
  `course_name` varchar(100) NOT NULL,
  `course_code` varchar(50) NOT NULL,
  `course_description` text DEFAULT NULL,
  `course_duration` int(11) DEFAULT NULL,
  `course_fees` float DEFAULT NULL,
  `student_count` int(11) DEFAULT 0,
  `revenue` decimal(20,2) DEFAULT NULL,
  `pic` blob DEFAULT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_by` varchar(50) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cb_in_employee`
--

CREATE TABLE `cb_in_employee` (
  `id` int(11) NOT NULL,
  `employee_id` varchar(50) NOT NULL,
  `employee_name` varchar(255) NOT NULL,
  `phone_number` varchar(15) NOT NULL,
  `email_id` varchar(255) DEFAULT NULL,
  `address_street` varchar(255) DEFAULT NULL,
  `address_district` varchar(50) DEFAULT NULL,
  `address_state` varchar(50) DEFAULT NULL,
  `address_pincode` varchar(10) DEFAULT NULL,
  `designation` varchar(50) DEFAULT NULL,
  `role` varchar(50) DEFAULT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_by` varchar(50) DEFAULT NULL,
  `updated_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `status` varchar(20) DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cb_in_fees`
--

CREATE TABLE `cb_in_fees` (
  `id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `batch_id` int(11) NOT NULL,
  `paid_on` date DEFAULT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `status` varchar(20) DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cb_in_global_configurations`
--

CREATE TABLE `cb_in_global_configurations` (
  `id` int(11) NOT NULL,
  `company_name` varchar(100) NOT NULL,
  `company_subtitle` varchar(100) DEFAULT NULL,
  `company_office_number` varchar(15) DEFAULT NULL,
  `company_phone_number` varchar(15) DEFAULT NULL,
  `company_email_id` varchar(100) DEFAULT NULL,
  `company_office_address_street` varchar(100) DEFAULT NULL,
  `company_office_address_district` varchar(50) DEFAULT NULL,
  `company_office_address_state` varchar(50) DEFAULT NULL,
  `company_office_address_pincode` varchar(10) DEFAULT NULL,
  `CIN` varchar(50) DEFAULT NULL,
  `GSTIN` varchar(50) DEFAULT NULL,
  `GST_Percentage` float DEFAULT NULL,
  `invoice_default_notes` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cb_in_installment`
--

CREATE TABLE `cb_in_installment` (
  `id` int(11) NOT NULL,
  `fees_id` int(11) NOT NULL,
  `installment_no` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `batch_id` int(11) NOT NULL,
  `due_date` date NOT NULL,
  `paid_date` date DEFAULT NULL,
  `invoice_id` int(11) NOT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `status` varchar(20) DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cb_in_invoice`
--

CREATE TABLE `cb_in_invoice` (
  `id` int(11) NOT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `invoice_no` varchar(50) NOT NULL,
  `customer_name` varchar(100) NOT NULL,
  `place_of_supply` varchar(100) DEFAULT NULL,
  `payment_status` varchar(20) DEFAULT NULL,
  `next_due_date` date DEFAULT NULL,
  `notes` text DEFAULT NULL,
  `subtotal` float DEFAULT NULL,
  `gst_enabled` tinyint(1) DEFAULT NULL,
  `cgst` decimal(10,2) DEFAULT NULL,
  `sgst` decimal(10,2) DEFAULT NULL,
  `discount_per` decimal(5,2) DEFAULT NULL,
  `discount` decimal(10,2) DEFAULT NULL,
  `adjustments` decimal(10,2) DEFAULT NULL,
  `grand_total` decimal(10,2) DEFAULT NULL,
  `amount_in_words` varchar(255) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_by` varchar(50) DEFAULT NULL,
  `updated_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cb_in_invoice_particulars`
--

CREATE TABLE `cb_in_invoice_particulars` (
  `id` int(11) NOT NULL,
  `invoice_id` int(11) NOT NULL,
  `item` varchar(255) NOT NULL,
  `rate` decimal(10,2) NOT NULL,
  `quantity` int(11) NOT NULL,
  `total` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cb_in_mentor_call_history`
--

CREATE TABLE `cb_in_mentor_call_history` (
  `id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL,
  `phone_number` varchar(15) NOT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cb_in_role_pages`
--

CREATE TABLE `cb_in_role_pages` (
  `id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `page` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cb_in_role_permissions`
--

CREATE TABLE `cb_in_role_permissions` (
  `role_id` int(11) NOT NULL,
  `role_name` varchar(50) DEFAULT NULL,
  `role_code` varchar(20) DEFAULT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `status` enum('active','inactive') DEFAULT 'active',
  `deleted` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cb_in_student_batch`
--

CREATE TABLE `cb_in_student_batch` (
  `id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `batch_id` int(11) NOT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `status` varchar(20) DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Triggers `cb_in_student_batch`
--
DELIMITER $$
CREATE TRIGGER `after_student_enrolled_batch` AFTER INSERT ON `cb_in_student_batch` FOR EACH ROW BEGIN
    UPDATE cb_in_batch 
    SET student_count = student_count + 1 
    WHERE id = NEW.batch_id;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `cb_in_student_course`
--

CREATE TABLE `cb_in_student_course` (
  `id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `certificate` int(11) DEFAULT 0,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `status` varchar(20) DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Triggers `cb_in_student_course`
--
DELIMITER $$
CREATE TRIGGER `after_student_enrolled_course` AFTER INSERT ON `cb_in_student_course` FOR EACH ROW BEGIN
    UPDATE cb_in_course 
    SET student_count = student_count + 1 
    WHERE course_id = NEW.course_id;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `cb_in_student_profile`
--

CREATE TABLE `cb_in_student_profile` (
  `id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `admission_id` int(11) NOT NULL,
  `mentor_id` int(11) NOT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_on` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `status` varchar(20) DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cb_in_admission`
--
ALTER TABLE `cb_in_admission`
  ADD PRIMARY KEY (`admission_id`);

--
-- Indexes for table `cb_in_batch`
--
ALTER TABLE `cb_in_batch`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cb_in_course`
--
ALTER TABLE `cb_in_course`
  ADD PRIMARY KEY (`course_id`);

--
-- Indexes for table `cb_in_employee`
--
ALTER TABLE `cb_in_employee`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cb_in_fees`
--
ALTER TABLE `cb_in_fees`
  ADD PRIMARY KEY (`id`),
  ADD KEY `student_id` (`student_id`),
  ADD KEY `course_id` (`course_id`),
  ADD KEY `batch_id` (`batch_id`);

--
-- Indexes for table `cb_in_global_configurations`
--
ALTER TABLE `cb_in_global_configurations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cb_in_installment`
--
ALTER TABLE `cb_in_installment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fees_id` (`fees_id`),
  ADD KEY `course_id` (`course_id`),
  ADD KEY `batch_id` (`batch_id`);

--
-- Indexes for table `cb_in_invoice`
--
ALTER TABLE `cb_in_invoice`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cb_in_invoice_particulars`
--
ALTER TABLE `cb_in_invoice_particulars`
  ADD PRIMARY KEY (`id`),
  ADD KEY `invoice_id` (`invoice_id`);

--
-- Indexes for table `cb_in_mentor_call_history`
--
ALTER TABLE `cb_in_mentor_call_history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `student_id` (`student_id`),
  ADD KEY `employee_id` (`employee_id`);

--
-- Indexes for table `cb_in_role_pages`
--
ALTER TABLE `cb_in_role_pages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role_id` (`role_id`);

--
-- Indexes for table `cb_in_role_permissions`
--
ALTER TABLE `cb_in_role_permissions`
  ADD PRIMARY KEY (`role_id`),
  ADD UNIQUE KEY `role_code` (`role_code`);

--
-- Indexes for table `cb_in_student_batch`
--
ALTER TABLE `cb_in_student_batch`
  ADD PRIMARY KEY (`id`),
  ADD KEY `student_id` (`student_id`),
  ADD KEY `batch_id` (`batch_id`);

--
-- Indexes for table `cb_in_student_course`
--
ALTER TABLE `cb_in_student_course`
  ADD PRIMARY KEY (`id`),
  ADD KEY `student_id` (`student_id`),
  ADD KEY `course_id` (`course_id`);

--
-- Indexes for table `cb_in_student_profile`
--
ALTER TABLE `cb_in_student_profile`
  ADD PRIMARY KEY (`id`),
  ADD KEY `admission_id` (`admission_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cb_in_admission`
--
ALTER TABLE `cb_in_admission`
  MODIFY `admission_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cb_in_batch`
--
ALTER TABLE `cb_in_batch`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cb_in_course`
--
ALTER TABLE `cb_in_course`
  MODIFY `course_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cb_in_employee`
--
ALTER TABLE `cb_in_employee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cb_in_fees`
--
ALTER TABLE `cb_in_fees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cb_in_global_configurations`
--
ALTER TABLE `cb_in_global_configurations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cb_in_installment`
--
ALTER TABLE `cb_in_installment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cb_in_invoice`
--
ALTER TABLE `cb_in_invoice`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cb_in_invoice_particulars`
--
ALTER TABLE `cb_in_invoice_particulars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cb_in_mentor_call_history`
--
ALTER TABLE `cb_in_mentor_call_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cb_in_role_pages`
--
ALTER TABLE `cb_in_role_pages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cb_in_role_permissions`
--
ALTER TABLE `cb_in_role_permissions`
  MODIFY `role_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cb_in_student_batch`
--
ALTER TABLE `cb_in_student_batch`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cb_in_student_course`
--
ALTER TABLE `cb_in_student_course`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cb_in_student_profile`
--
ALTER TABLE `cb_in_student_profile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cb_in_fees`
--
ALTER TABLE `cb_in_fees`
  ADD CONSTRAINT `cb_in_fees_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `cb_in_student_profile` (`id`),
  ADD CONSTRAINT `cb_in_fees_ibfk_2` FOREIGN KEY (`course_id`) REFERENCES `cb_in_course` (`course_id`),
  ADD CONSTRAINT `cb_in_fees_ibfk_3` FOREIGN KEY (`batch_id`) REFERENCES `cb_in_batch` (`id`);

--
-- Constraints for table `cb_in_installment`
--
ALTER TABLE `cb_in_installment`
  ADD CONSTRAINT `cb_in_installment_ibfk_1` FOREIGN KEY (`fees_id`) REFERENCES `cb_in_fees` (`id`),
  ADD CONSTRAINT `cb_in_installment_ibfk_2` FOREIGN KEY (`course_id`) REFERENCES `cb_in_course` (`course_id`),
  ADD CONSTRAINT `cb_in_installment_ibfk_3` FOREIGN KEY (`batch_id`) REFERENCES `cb_in_batch` (`id`);

--
-- Constraints for table `cb_in_invoice_particulars`
--
ALTER TABLE `cb_in_invoice_particulars`
  ADD CONSTRAINT `cb_in_invoice_particulars_ibfk_1` FOREIGN KEY (`invoice_id`) REFERENCES `cb_in_invoice` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `cb_in_mentor_call_history`
--
ALTER TABLE `cb_in_mentor_call_history`
  ADD CONSTRAINT `cb_in_mentor_call_history_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `cb_in_student_profile` (`id`),
  ADD CONSTRAINT `cb_in_mentor_call_history_ibfk_2` FOREIGN KEY (`employee_id`) REFERENCES `cb_in_employee` (`id`);

--
-- Constraints for table `cb_in_role_pages`
--
ALTER TABLE `cb_in_role_pages`
  ADD CONSTRAINT `cb_in_role_pages_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `cb_in_role_permissions` (`role_id`);

--
-- Constraints for table `cb_in_student_batch`
--
ALTER TABLE `cb_in_student_batch`
  ADD CONSTRAINT `cb_in_student_batch_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `cb_in_student_profile` (`id`),
  ADD CONSTRAINT `cb_in_student_batch_ibfk_2` FOREIGN KEY (`batch_id`) REFERENCES `cb_in_batch` (`id`);

--
-- Constraints for table `cb_in_student_course`
--
ALTER TABLE `cb_in_student_course`
  ADD CONSTRAINT `cb_in_student_course_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `cb_in_student_profile` (`id`),
  ADD CONSTRAINT `cb_in_student_course_ibfk_2` FOREIGN KEY (`course_id`) REFERENCES `cb_in_course` (`course_id`);

--
-- Constraints for table `cb_in_student_profile`
--
ALTER TABLE `cb_in_student_profile`
  ADD CONSTRAINT `cb_in_student_profile_ibfk_1` FOREIGN KEY (`admission_id`) REFERENCES `cb_in_admission` (`admission_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
