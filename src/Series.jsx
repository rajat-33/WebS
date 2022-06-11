import React from 'react'
import tagline from './Tagline';
import companyColor from './CompanyColor';

const Series=[
    {key: "1", src: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQEMzXhLH2-l2v3F9_tRo7HSgiAfGfIidaayuv-vXQz6x09dSee', category: tagline.get('netflix'), title: 'Sherlock', color: companyColor.get('netflix'), link: 'https://www.netflix.com/za/title/70202589'}, 
    {key: "2", src: 'https://m.media-amazon.com/images/M/MV5BMTllYzQ0MzctZTI4Ny00YTE2LTkzYjktMTc4ZWE2MDUxNzk2XkEyXkFqcGdeQXVyNzEyNTM4MTU@._V1_.jpg', category: tagline.get('amazon'), title: 'Panchayat', color: companyColor.get('amazon'), link: 'https://www.primevideo.com/detail/Panchayat/0KEP4A6DWRKFYQFTSU5RXHEAN2'},
    {key: "3", src: 'https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/muzamil_ibrahim_on_the_future_of_special_ops.jpg', category: tagline.get('hotstar'), title: 'Special OPS', color: companyColor.get('hotstar'), link: 'https://www.hotstar.com/in/tv/special-ops/1260022894'}, 
    {key: "4", src: 'https://m.media-amazon.com/images/I/71W-Bb4XsiL._SS500_.jpg', category: tagline.get('netflix'), title: 'Kota Factory', color: companyColor.get('netflix') ,link: 'https://www.netflix.com/in/title/81249783'},
    {key: "5", src:  'https://wallpapercave.com/wp/wp6761097.jpg', category: tagline.get('amazon'), title: 'Hostel Daze', color: companyColor.get('amazon'), link: 'https://www.primevideo.com/detail/0RMNVF1U4KJSQJQGZ029FUN1FN/?refdvm_pds_gen_in_as_s_gt_dfeedn111&ref_=dvm_pds_gen_in_as_s_g_dsafeedn_mkw_s-dc&mrntrk=pcrid_580559066071_slid__pgrid_120279910526_pgeo_9061884_x_191710606000_ptid_dsa-1249728551206'},
];

export default Series;