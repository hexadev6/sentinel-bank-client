import { Card, CardBody, Typography } from '@material-tailwind/react';
import React from 'react';
import { FaArrowTrendUp } from 'react-icons/fa6';

const AdminTransafer = () => {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-4 xl:grid-cols-4 gap-2">
              <Card className="border shadow-lg bg-nevy-blue rounded-lg text-white">
        <CardBody>
          <Typography variant="paragraph" className="mb-2 font-light">
            Income
          </Typography>
          <Typography variant="h5" className="font-medium">
            $20212
          </Typography>
        </CardBody>
      </Card>
              <Card className="border shadow-lg bg-red-300 rounded-lg text-light-gray">
        <CardBody>
          <Typography variant="paragraph" className="mb-2 font-light">
            Income
          </Typography>
          <Typography variant="h5" className="font-medium">
            $20212
          </Typography>
        </CardBody>
      </Card>
              <Card className="border shadow-lg bg-purple-400 rounded-lg text-white">
        <CardBody>
          <Typography variant="paragraph" className="mb-2 font-light">
            Income
          </Typography>
          <Typography variant="h5" className="font-medium">
            $20212
          </Typography>
        </CardBody>
      </Card>
              <Card className="border shadow-lg bg-green-100 rounded-lg text-light-gray">
        <CardBody>
          <Typography variant="paragraph" className="mb-2 font-light">
            Income
          </Typography>
          <Typography variant="h5" className="font-medium">
            $20212
          </Typography>
        </CardBody>
      </Card>
        </div>
    );
};

export default AdminTransafer;