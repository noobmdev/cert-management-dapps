export const JOB_CORE_ADDRESS = "0xddCFB2aa6dADFf1775149B31D6261f64aCF583b3";

export const JOB_CORE_METHODS = {
  getLatestRecruiterId: "getLatestRecruiterId",
  recruiters: "recruiters",
  getJob: "getJob",
  getJobs: "getJobs()",
  getJobsPaging: "getJobs(uint256,uint256)",
  jobOwner: "jobOwner",
  recruiterToId: "recruiterToId",
  addJob: "addJob",
  getOwnerJobs: "getOwnerJobs",
  jobs: "jobs",
  updateCurrentResume: "updateCurrentResume",
  getCurrentResume: "getCurrentResume",
  addResume: "addResume",
  getOwnerResumes: "getOwnerResumes",
  isAppliedJob: "isAppliedJob",
  isResumeApplied: "isResumeApplied",
  applyJob: "applyJob",
  getAppliedJobs: "getAppliedJobs",
};

export const ROLES = {
  ADMIN: {
    name: "admin",
    value: 0,
  },
  CENSOR: {
    name: "censors",
    value: 1,
  },
  USER: {
    name: "users",
    value: 2,
  },
};

export const GRADUATE_GRADE = {
  F: 0,
  D: 1,
  C: 2,
  B: 3,
  A: 4,
};

export const GENDER = {
  MALE: 0,
  FEMALE: 1,
};

export const CERT_STATUSES = {
  PENDING: 0,
  REPORTED: 1,
};
