import React from "react";
import "./TrustCenter.css";



const certifications = [
  {
    name: "SOC 2",
    image: "https://www.scylladb.com/wp-content/uploads/SOC-2-768x768.png",
  },
  {
    name: "PCI-DSS",
    image:
      "https://www.scylladb.com/wp-content/uploads/PCI-DSS-Compliant-Logo-FirstChoice.png",
  },
  {
    name: "ISO 27001",
    image: "https://www.scylladb.com/wp-content/uploads/ISO-27001-768x768.png",
  },
  {
    name: "ISO 27017",
    image:
      "https://www.scylladb.com/wp-content/uploads/certification_iso_27017-e1653331515469-150x150.png",
  },
  {
    name: "ISO 27018",
    image:
      "https://www.scylladb.com/wp-content/uploads/ISO-27018-e1652741705889.png",
  },
];



const TrustCenter = () => {
  return (
    <>
      <div className="trust-center">
        <h1>ScyllaDB Trust Center</h1>
      </div>

      <div className="content">
        <h4>ScyllaDB Security Vulnerability Reporting</h4>
        <p>
          ScyllaDB maintains a vulnerability reporting process that provides, at
          ScyllaDB’s security team’s discretion, a “bug bounty” to the first
          person who identifies a previously unreported security issue.
          Vulnerabilities should be reported as of June 01, 2023, only by form
          according to the company
          <a href="#"> Bug Bounty Policy </a>.
        </p>

        <h4>ScyllaDB Data Privacy and Compliance</h4>
        <p>
          ScyllaDB is fully committed to being transparent about how we collect,
          use, and protect data received by ScyllaDB. Please see the
          <a href="#"> ScyllaDB Privacy Policy </a> and
          <a href="#"> ScyllaDB Policies and Agreements </a> for more
          information.
        </p>

        <p>
          ScyllaDB undergoes independent third-party audits to confirm that it
          meets strict industry standards for security, availability, processing
          integrity, confidentiality, and privacy.
        </p>
        <p>
          ScyllaDB has been certified to be compliant with the following
          standards:
        </p>
      </div>

      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-card">
            <a href="" > <img src={cert.image} alt={cert.name} /> </a>
            <p>{cert.name}</p>
          </div>
        ))}
      </div>

      <div className="content">
        <h4>ScyllaDB Security Features</h4>

        <div className="content">
          <p>
            ScyllaDB Cloud clusters run within dedicated, isolated environments,
            including:{" "}
          </p>
          <ul>
            <li>Dedicated virtual private service (VPS)</li>
            <li>Dedicated VMs for ScyllaDB Database</li>
            <li>
              Dedicated VMs for ScyllaDB Monitoring and ScyllaDB Manager servers
            </li>
            <li>Inter-cluster access is not permitted.</li>
          </ul>

          <p>Inter-cluster access is not permitted.</p>
          <p>
            The data plane is fully isolated from the control plane. Customer
            data is limited to the ScyllaDB cluster. The control plane does not
            store, query, or access customer data.
          </p>

          <h3>The Control Plane access to ScyllaDB Clusters is limited to </h3>
          <ul>
            <li>Monitoring information (metrics)</li>
            <li>Operations, such as add node and upgrades</li>
          </ul>

          <h3>Principle of Least Privilege invariants</h3>
          <ul>
            <li>
              All access rights are granted based on business needs and on a
              need-to-know basis.
            </li>
            <li>
              All access points between elements are closed by default.Relevant
              connections and API are explicitly enabled.
            </li>
            <li>
              ScyllaDB database users can only access ScyllaDB over CQL or via
              the REST API (Alternator)
            </li>
            <li>
              Users cannot login to ScyllaDB nodes, monitoring, or manager
              servers; enforced using IP/port whitelist.
            </li>
            <li>
              ScyllaDB Monitoring can only access ScyllaDB servers monitoring
              and log collection APIs; enforced using IP/port whitelist.
            </li>
            <li>
              ScyllaDB Manager can only access ScyllaDB servers Manager Agent
              API; enforced using IP/port whitelist.
            </li>
            <li>
              Access backup, stored on S3 (AWS) and Cloud Storage (GCP), is
              limited to the ScyllaDB cluster instances
            </li>
          </ul>

          <h3>Access Control</h3>
          <p>ScyllaDB Cloud team access to the system is:</p>
          <ul>
            <li>Granted based on business needs and on a need-to-know basis</li>
            <li>Limited to a minimal subset of ScyllaDB Support engineers</li>
            <li>Only permitted via tools/scripts</li>
            <li>Audited</li>
          </ul>

          <h3>Data Confidentiality</h3>
          <ul>
            <li>
              ScyllaDB node-to-node in the same region, AWS VPC encryption in
              transit or Google Cloud VPC encryption in transit
            </li>
            <li>
              ScyllaDB node-to-node between regions – All data flowing across
              AWS Regions over the AWS global network is automatically encrypted
              at the physical layer before it leaves AWS secured facilities. All
              traffic between AZs is encrypted.
            </li>
            <li>
              ScyllaDB client-to-node, inside AWS, encrypted by default by AWS.
              ScyllaDB-managed encryption in transit is optional.
            </li>
          </ul>

          <h3>Encryption at rest on AWS</h3>
          <p>
            ScyllaDB cluster uses NVMe to store data. The data on NVMe instance
            storage is encrypted using an XTS-AES-256 block cipher implemented
            in a hardware module on the instance. The encryption keys are
            managed by EC2 and generated using the hardware module and are
            unique to each NVMe instance storage device.{" "}
          </p>

          <h3>Encryption at rest on Google Cloud</h3>
          <p>
            ScyllaDB Cluster uses SSD to store information. Compute Engine
            automatically encrypts data when it is written to local SSD storage
            space.
          </p>

          <h4>ScyllaDB Best Practices for Security</h4>
          <p>
            The <a href="#" > ScyllaDB Security Checklist </a> is a list of security
            recommendations that should be implemented to protect your ScyllaDB
            cluster. These guidelines cover the following topics :
          </p>
          <ul>
            <li>Use VPC peering</li>
            <li>Minimizing whitelisted IP addresses</li>
            <li>
              Using a dedicated AWS sub-account for ScyllaDB Cloud Bring Your
              Own Account (BYOA)
            </li>
            <li>Security Recommendations for ScyllaDB Database User</li>
            <li>Recommendations for Role Based Access per keyspace/table. </li>
            <li>Password policy </li>
          </ul>

          <h4>ScyllaDB Security Resources</h4>

          <ul>
            <li>
              <a href="#" >ScyllaDB Privacy Policy</a>
            </li>
            <li>
              <a href="#" >ScyllaDB Security Policy</a>
            </li>
            <li>
              <a href="#" > ScyllaDB Security Checklist </a>
            </li>
            <li>
              <a href="#" >ScyllaDB Cloud Security Best Practices</a>
            </li>
            <li>
              <a href="#" >ScyllaDB Cloud Security Concepts </a>
            </li>
            <li>
              <a href="#" > ScyllaDB Auditing Guide</a>
            </li>
            <li>
              <a href="#" > ScyllaDB Security Lesson on ScyllaDB University </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};



export default TrustCenter;
