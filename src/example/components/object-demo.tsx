import { RotateCcw } from "lucide-react";
import { useAddressState } from "@/lib";
import { CodeToggle } from "./code-toggle";

interface Profile {
  name: string;
  email: string;
  role: string;
}

const DEFAULT_PROFILE: Profile = {
  name: "",
  email: "",
  role: "developer",
};

const CODE_SNIPPET = `interface Profile {
  name: string;
  email: string;
  role: string;
}

const [profile, setProfile] = useAddressState<Profile>("profile", {
  name: "",
  email: "",
  role: "developer",
});

// Update a field
const updateField = (field: keyof Profile, value: string) => {
  setProfile({ ...profile, [field]: value });
};`;

export function ObjectDemo() {
  const [profile, setProfile] = useAddressState<Profile>("profile", DEFAULT_PROFILE);

  const updateField = <K extends keyof Profile>(field: K, value: Profile[K]) => {
    setProfile({ ...profile, [field]: value });
  };

  const resetProfile = () => {
    setProfile(DEFAULT_PROFILE);
  };

  return (
    <section className="mb-12">
      <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4">Object Example</h2>
      <div className="p-6 rounded-xl bg-neutral-900/50 border border-neutral-800 space-y-4">
        {/* Form fields */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs text-neutral-500 mb-1">Name</label>
            <input
              value={profile.name}
              onChange={(e) => updateField("name", e.target.value)}
              placeholder="John Doe"
              className="w-full px-3 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-neutral-600 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs text-neutral-500 mb-1">Email</label>
            <input
              value={profile.email}
              onChange={(e) => updateField("email", e.target.value)}
              placeholder="john@example.com"
              className="w-full px-3 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-neutral-600 transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs text-neutral-500 mb-1">Role</label>
          <select
            value={profile.role}
            onChange={(e) => updateField("role", e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-white text-sm focus:outline-none focus:border-neutral-600 transition-colors"
          >
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Manager</option>
          </select>
        </div>

        {/* Reset button */}
        <button
          onClick={resetProfile}
          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white text-sm transition-colors"
        >
          <RotateCcw size={14} />
          Reset
        </button>

        {/* URL display */}
        <div className="text-sm text-neutral-500 pt-2 border-t border-neutral-800">
          Stored as <code className="text-emerald-400 break-all">?profile={JSON.stringify(profile)}</code>
        </div>

        <CodeToggle code={CODE_SNIPPET} />
      </div>
    </section>
  );
}
