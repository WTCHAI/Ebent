import React from 'react';
import { FeedBlogDetail } from '@/interface/feedBlogs/feedBlogDetails';
import { Image } from 'antd';
import { ImLocation } from 'react-icons/im';

type Props = {
  detail: FeedBlogDetail;
};

function translateDay(day: string) {
  switch (day) {
    case 'วันอาทิตย์ที่':
      return 'อา';
    case 'วันจันทร์ที่':
      return 'จ';
    case 'วันอังคารที่':
      return 'อ';
    case 'วันพุธที่':
      return 'พ';
    case 'วันพฤหัสบดีที่':
      return 'พฤ';
    case 'วันศุกร์ที่':
      return 'ศ';
    case 'วันเสาร์ที่':
      return 'ส';
    default:
      return '';
  }
}

export default function BlogsDetail({ detail }: Props) {
  const startDate = new Date(detail.startDate);
  const endDate = new Date(detail.endDate);
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
  const TransDateS = startDate.toLocaleDateString('th-TH', options).split(' ');
  const TransDateE = endDate.toLocaleDateString('th-TH', options).split(' ');

  return (
    <div className="flex flex-col rounded-xl h-full p-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex rounded-lg ">
        <Image
          src={detail.eventImage ? detail.eventImage : "https://placehold.co/1980x1080"}
          alt={detail.eventTitle}
          className="w-full "
        />
      </div>
      <div className="flex flex-col h-full pt-4">
        <p className="text-red-500 text-xs font-normal mb-2">
          {translateDay(TransDateS[0])}, {TransDateS[1]} {TransDateS[2]} {TransDateE[3]}
        </p>
        <div className="flex flex-col gap-y-2">
          <h1 className="text-lg font-semibold text-gray-900">{detail.eventTitle}</h1>
          <span className="flex items-center text-gray-600">
            <ImLocation className="text-base mr-2" />
            <p className="text-sm">{detail.location}</p>
          </span>
        </div>
      </div>
    </div>
  );
}
