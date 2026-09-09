// Maps a human-readable filter/status label to the integer boolean the
// database actually stores (0/1). Case-insensitive. Labels this doesn't
// recognize are returned unchanged, so it's safe to run any option label
// through this before it becomes a filter value.
const LABEL_TO_BIT = {
  active: 1,
  inactive: 0,
  yes: 1,
  no: 0,
};

export const statusToBit = (label) => {
  const key = String(label).trim().toLowerCase();
  return key in LABEL_TO_BIT ? LABEL_TO_BIT[key] : label;
};

// Inverse of statusToBit: turns a 0/1 column value back into a
// human-readable label for display. Pass `kind` to pick which label pair
// matches the column's meaning ("active" for Active/Inactive toggles,
// "yesNo" for Yes/No toggles like Returns' "restocked" column).
const BIT_TO_LABEL = {
  active: { 1: "Active", 0: "Inactive" },
  yesNo: { 1: "Yes", 0: "No" },
};

export const bitToStatus = (value, kind = "active") => {
  const labels = BIT_TO_LABEL[kind] ?? BIT_TO_LABEL.active;
  return labels[Number(value)] ?? value;
};
