const branches = [
  { name: '서울지역본부', address: '서울특별시 중구 퇴계로 173', tel: '02-6320-7000', fax: '050-3470-0102', beat: '서울특별시(종로구, 중구, 용산구, 은평구, 서대문구, 마포구)' },
  { name: '부산지역본부', address: '부산광역시 부산진구 범일로 181', tel: '051-640-9800', fax: '050-3470-0123', beat: '부산광역시' },
  { name: '대구지역본부', address: '대구광역시 남구 중앙대로 200', tel: '053-288-1500', fax: '050-3470-0134', beat: '대구광역시, 경상북도(경산시, 청도군, 칠곡군(구미국가산업단지 제외), 고령군, 성주군, 영천시)' },
  { name: '광주지역본부', address: '광주광역시 서구 천변좌로 268', tel: '062-448-1199', fax: '050-3470-0154', beat: '광주광역시, 전라남도(곡성군, 구례군, 담양군, 장성군)' },
  { name: '대전지역본부', address: '대전광역시 서구 청사로 136', tel: '042-620-6200', fax: '050-3470-0204', beat: '대전광역시, 세종특별자치시, 충청남도(공주시, 논산시, 계룡시, 금산군)' },
  { name: '경기지역본부', address: '경기도 수원시 팔달구 경수대로 518', tel: '031-300-0906', fax: '050-3470-0224', beat: '경기도(수원시, 평택시, 오산시, 안성시, 화성시)' },
  { name: '서울남부지사', address: '서울특별시 영등포구 버드나루로2길 8', tel: '02-6004-1005', fax: '050-3470-0114', beat: '서울특별시(양천구, 강서구, 구로구, 금천구, 영등포구, 동작구, 관악구)' },
  { name: '서울동부지사', address: '서울특별시 송파구 올림픽로 289', tel: '02-2146-3500', fax: '050-3470-0115', beat: '서울특별시(서초구, 강남구, 송파구, 강동구)' },
  { name: '서울북부지사', address: '서울특별시 노원구 노해로 464', tel: '02-6312-5300', fax: '050-3470-0138', beat: '서울특별시(성동구, 광진구, 동대문구, 중랑구, 성북구, 강북구, 도봉구, 노원구)' },
  { name: '인천지사', address: '인천광역시 부평구 무네미로 478', tel: '032-242-1004', fax: '050-3470-0142', beat: '인천광역시' },
  { name: '울산지사', address: '울산광역시 남구 번영로 131', tel: '052-226-1004', fax: '050-3470-0212', beat: '울산광역시, 경상남도(양산시, 밀양시)' },
  { name: '경기북부지사', address: '경기도 의정부시 시민로 24', tel: '031-850-4500', fax: '050-3470-0232', beat: '경기도(고양시, 구리시, 남양주시, 동두천시, 양주시, 연천군, 의정부시, 파주시, 포천시, 가평군, 김포시)' },
  { name: '경기동부지사', address: '경기도 성남시 분당구 구미로 8', tel: '031-600-0200', fax: '050-3470-0207', beat: '경기도(하남시, 광주시, 성남시, 여주시, 용인시, 이천시, 양평군)' },
  { name: '경기서부지사', address: '경기도 안산시 단원구 화랑로 366', tel: '031-500-2410', fax: '050-3470-0238', beat: '경기도(안양시, 부천시, 광명시, 안산시, 과천시, 시흥시, 군포시, 의왕시)' },
  { name: '강원지사', address: '강원특별자치도 원주시 호저로 47', tel: '033-737-6620', fax: '050-3470-0242', beat: '강원특별자치도' },
  { name: '충북지사', address: '충청북도 청주시 흥덕구 풍산로 50', tel: '043-230-6400', fax: '050-3470-0252', beat: '충청북도' },
  { name: '충남지사', address: '충청남도 천안시 동남구 만남로 82', tel: '041-629-6000', fax: '050-3470-0332', beat: '충청남도(계룡시, 금산군, 논산시, 공주시 제외)' },
  { name: '전북지사', address: '전북특별자치도 전주시 덕진구 백제대로 751', tel: '063-240-2400', fax: '050-3470-0302', beat: '전북특별자치도' },
  { name: '전남지사', address: '전라남도 목포시 영산로 118', tel: '061-983-1800', fax: '050-3470-0342', beat: '전라남도(곡성군, 구례군, 담양군, 장성군 제외)' },
  { name: '경북지사', address: '경상북도 구미시 송정대로 73', tel: '054-450-3000', fax: '050-3470-0352', beat: '경상북도(영천시, 경산시, 청도군, 고령군, 성주군, 칠곡군(구미국가산업단지 제외) 제외)' },
  { name: '경남동부지사', address: '경상남도 창원시 성산구 중앙대로 107', tel: '055-225-8006', fax: '050-3470-0312', beat: '경상남도(밀양시, 양산시 제외)' },
  { name: '제주지사', address: '제주특별자치도 제주시 동광로 30', tel: '064-710-5010', fax: '050-3470-0322', beat: '제주특별자치도' }
];

export default branches;