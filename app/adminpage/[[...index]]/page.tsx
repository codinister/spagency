'use client'


import { NextStudio } from 'next-sanity/studio';
import config from '@/sanity/config.sanity';

function AdminPage() {
  return (<>
  <br />
  <br />
  <NextStudio config={config} />
  </>)
}

export default AdminPage;
