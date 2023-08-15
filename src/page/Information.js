import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";

const provinceArr = [
  {
    name: "Tân Bình",
    value: "tan binh",
    city: "hcm",
  },
  {
    name: "Tân Phú",
    value: "tan phu",
    city: "hcm",
  },
  {
    name: "Bình Tân",
    value: "binh tan",
    city: "hcm",
  },
  {
    name: "Biên Hòa",
    value: "bien hoa",
    city: "dn",
  },
  {
    name: "Long Thành",
    value: "long thanh",
    city: "dn",
  },
  {
    name: "Xuân Lộc",
    value: "xuan loc",
    city: "dn",
  },
];

const titleArray = [
  {
    name: "Giám đốc kinh doanh",
    value: "CEO",
    type: "sale",
  },
  {
    name: "Nhân viên kinh doanh",
    value: "staff",
    type: "sale",
  },
  {
    name: "Frontend Developer",
    value: "FE",
    type: "tech",
  },
  {
    name: "Backend Developer",
    value: "BE",
    type: "tech",
  },
];

const Information = () => {
  const [province, setProvince] = useState(provinceArr);
  const [selectMajor, setSelectMajor] = useState(titleArray);
  const [data, setData] = useState({
    name: "",
    title: "",
    major: "",
    city: "",
    district: "",
    country: "",
    year: "",
    education: "",
    field: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    title: "",
    major: "",
    city: "",
    district: "",
    country: "",
    year: "",
    education: "",
    field: "",
  });

  useEffect(() => {
    if (data.city !== "") {
      const newProviceData = provinceArr.filter((province) => {
        return province.city.toLowerCase() === data.city.toLowerCase();
      });
      console.log(newProviceData);
      setProvince(newProviceData);
    }

    if (data.major !== "") {
      const newMajor = titleArray.filter((major) => {
        return major.type.toLowerCase() === data.major.toLowerCase();
      });
      console.log(newMajor);
      setSelectMajor(newMajor);
    }
  }, [data.city, data.major]);

  const validateError = () => {
    //validate name
    if (data.name === "") {
      const message = "Vui lòng nhập Họ và tên ";
      errors.name = message;
    }
    if (data.title === "") {
      const message = "Vui lòng nhập Chức danh công việc ";
      errors.title = message;
    }

    if (data.major === "") {
      const message = "Vui lòng nhập Chuyên ngành ";
      errors.major = message;
    }

    if (data.city === "") {
      const message = "Vui lòng nhập Tỉnh/thành phố ";
      errors.city = message;
    }

    if (data.country === "") {
      const message = "Vui lòng nhập Quê quán ";
      errors.country = message;
    }

    if (data.district === "") {
      const message = "Vui lòng nhập Quận/huyện ";
      errors.district = message;
    }
    if (data.year === "") {
      const message = "Vui lòng nhập Năm sinh ";
      errors.year = message;
    }
    if (data.education === "") {
      const message = "Vui lòng nhập Học vấn ";
      errors.education = message;
    }
    if (data.field === "") {
      const message = "Vui lòng nhập Lĩnh vực làm việc ";
      errors.field = message;
    }
    setErrors({ ...errors });
  };

  const handleSubmit = () => {
    validateError();
    console.log(validateError());
    if (validateError()) {
      console.log(data);
    }
  };

  return (
    <Form>
      {/* Thông tin cá nhân */}
      <h4>Thông tin cá nhân</h4>
      <Form.Group className="mb-3 w-50" controlId="name">
        <Form.Label>Họ và tên</Form.Label>
        <Form.Control
          type="text"
          placeholder="Họ và tên"
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <div className="text-danger">{errors.name}</div>
      </Form.Group>

      <Form.Group className="mb-3" controlId="address">
        <h5>Nơi ở hiện tại</h5>
        <div className="province-wrap">
          <div>
            <Form.Label>Tỉnh/Thành phố</Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setData({ ...data, city: e.target.value })}
            >
              <option value="all">Chọn Tỉnh/thành phố</option>
              <option value="hcm"> Hồ Chí Minh</option>
              <option value="dn">Đồng Nai</option>
            </Form.Select>
            <div className="text-danger">{errors.city}</div>
          </div>

          <div>
            <Form.Label>Quận/huyện</Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setData({ ...data, district: e.target.value })}
            >
              <option>Chọn Quận/Huyện</option>
              {province.map((data, index) => (
                <option value={data.value} key={index}>
                  {data.name}
                </option>
              ))}
            </Form.Select>
            <div className="text-danger">{errors.district}</div>
          </div>
        </div>
      </Form.Group>

      <Form.Group className="mb-3 w-50" controlId="country">
        <Form.Label>Quê quán</Form.Label>
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => setData({ ...data, country: e.target.value })}
        >
          <option value="all">Chọn nơi ở</option>
          <option value="hcm"> Hồ Chí Minh</option>
          <option value="dn">Đồng Nai</option>
        </Form.Select>
        <div className="text-danger">{errors.country}</div>
      </Form.Group>

      <Form.Group className="mb-3 w-25" controlId="year-date">
        <Form.Label>Năm sinh</Form.Label>
        <Form.Control
          type="text"
          placeholder="Năm sinh"
          onChange={(e) => setData({ ...data, year: e.target.value })}
        />
        <div className="text-danger">{errors.year}</div>
      </Form.Group>

      {/* Trình độ hoc vấn */}
      <h4>Trình độ học vấn</h4>
      <Form.Group className="mb-3 w-50" controlId="education">
        <Form.Label>Trình độ</Form.Label>
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => setData({ ...data, education: e.target.value })}
        >
          <option value="all">Chọn trình độ</option>
          <option value="university"> Đại học</option>
          <option value="college">Cao đẳng</option>
          <option value="secondary">Trung cấp</option>
        </Form.Select>
        <div className="text-danger">{errors.education}</div>
      </Form.Group>

      <Form.Group className="mb-3 w-50" controlId="major">
        <Form.Label>Chuyên ngành</Form.Label>
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => setData({ ...data, major: e.target.value })}
        >
          <option value="all">Chọn chuyên ngành</option>
          <option value="sale">Kinh doanh dịch vụ</option>
          <option value="tech">Công nghệ thông tin</option>
        </Form.Select>
        <div className="text-danger">{errors.major}</div>
      </Form.Group>

      <Form.Group className="mb-3 w-50" controlId="title">
        <Form.Label>Chức danh công việc</Form.Label>
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => setData({ ...data, title: e.target.value })}
        >
          <option>Chọn Chức danh</option>
          {selectMajor.map((data, index) => (
            <option value={data.value} key={index}>
              {data.name}
            </option>
          ))}
        </Form.Select>
        <div className="text-danger">{errors.title}</div>
      </Form.Group>

      <Form.Group className="mb-3 w-50" controlId="field of work">
        <Form.Label>Lĩnh vực làm việc</Form.Label>
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => setData({ ...data, field: e.target.value })}
        >
          <option value="all">Chọn lĩnh vực làm việc</option>
          <option value="trade">Thương mại </option>
          <option value="service">Dịch vụ</option>
          <option value="production">Sản xuất</option>
        </Form.Select>
        <div className="text-danger">{errors.field}</div>
      </Form.Group>
      <Form.Group className="text-center">
        <button
          type="button"
          className="btn btn-success w-50"
          onClick={handleSubmit}
        >
          Lưu
        </button>
      </Form.Group>
    </Form>
  );
};

export default Information;
