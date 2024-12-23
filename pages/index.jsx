import React, { useState } from 'react';
import Link from 'next/link';
import PhoneAvatar from '@/components/PhoneAvatar';

const Home = () => {
  const [links, setLinks] = useState([{ id: 1, platform: '', url: '' }]);

  const addLink = () => {
    setLinks([...links, { id: links.length + 1, platform: '', url: '' }]);
  };

  const removeLink = (id) => {
    setLinks(links.filter((link) => link.id !== id));
  };

  return (
    <div className="h-screen overflow-hidden">
      {/* Darker Header */}
      <header className="bg-gray-900 text-white py-4">
        <nav className="flex justify-between items-center px-8">
          {/* Centered Buttons */}
          <div className="flex justify-center flex-grow space-x-8">
            <Link href="/">
              <button className="font-semibold bg-slate-600 px-4 py-2 rounded">Links</button>
            </Link>
            <Link href="/profile">
              <button className="font-semibold bg-slate-600 px-4 py-2 rounded">Profile Details</button>
            </Link>
          </div>
          {/* Right Aligned Preview Button */}
          <Link href="/preview">
            <button className="h-10 w-24 rounded bg-gray-900 border">Preview</button>
          </Link>
        </nav>
      </header>

      <div className="flex h-[calc(100%-96px)] overflow-hidden">
        {/* Phone avatar section (hidden on small screens) */}
        <div className="lg:w-2/5 hidden lg:flex justify-center items-center bg-gray-100">
          <PhoneAvatar/>
        </div>  
        {/* Customize links section */}
        <section className="w-full lg:w-3/5 flex flex-col justify-between px-8 bg-white">
          {/* Add New Link Button at the top */}
          <div className="mt-4">
            <h2 className="mb-2 text-lg text-slate-700 font-bold">Customize your links</h2>
            <p className="text-sm font-semibold text-slate-500 mb-4">Add/Edit/Remove links below and then share all your profiles with the world!</p>
            <button onClick={addLink} className="bg-slate-600 shadow-xl text-white px-4 py-2 rounded border border-gray-300 w-full">
              + Add new link
            </button>
          </div>

          {/* Links Section with Scroll */}
          <div className="overflow-y-auto flex-grow mt-4 pr-4">
            {/* Map through the links */}
            {links.map((link, index) => (
              <div key={link.id} className="mt-4 border-b pb-4">
                {/* Link number and remove button on the same row */}
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-slate-600">Link #{index + 1}</p>
                  <button onClick={() => removeLink(link.id)} className="bg-red-500 text-white px-4 py-2 rounded border">
                    Remove
                  </button>
                </div>

                {/* Link input and platform selection underneath */}
                <div className="mt-2">
                  <select className="select select-bordered w-full mb-2">
                    <option disabled selected>Choose platform</option>
                    <option>GitHub</option>
                    <option>LinkedIn</option>
                    <option>Reddit</option>
                    <option>Twitter/ X</option>
                    <option>YouTube</option>
                  </select>
                  <input type="text" placeholder="Enter link" className="input input-bordered w-full" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Save button positioned bottom-right */}
      <div className="fixed bottom-8 right-8">
        <button className="bg-slate-600 text-white px-6 py-2 rounded">Save</button>
      </div>
    </div>
  );
};

export default Home;
