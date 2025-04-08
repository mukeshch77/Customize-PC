import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Example components data
const componentOptions = {
  cpu: [
    { id: 1, name: 'Intel Core i9-12900K', price: 599 },
    { id: 2, name: 'AMD Ryzen 9 5900X', price: 549 },
    { id: 3, name: 'Intel Core i7-11700K', price: 399 },
    { id: 4, name: 'AMD Ryzen 7 5800X', price: 449 },
  ],
  gpu: [
    { id: 1, name: 'NVIDIA RTX 3080', price: 699 },
    { id: 2, name: 'NVIDIA RTX 3090', price: 1499 },
    { id: 3, name: 'AMD Radeon RX 6800 XT', price: 649 },
    { id: 4, name: 'NVIDIA RTX 3070', price: 499 },
  ],
  motherboard: [
    { id: 1, name: 'ASUS ROG Strix Z590-E', price: 279 },
    { id: 2, name: 'MSI MPG B550 Gaming Edge WiFi', price: 179 },
    { id: 3, name: 'Gigabyte Z490 AORUS Elite', price: 229 },
    { id: 4, name: 'ASRock B550 Phantom Gaming 4', price: 139 },
  ],
  ram: [
    { id: 1, name: 'Corsair Vengeance LPX 16GB (2x8GB) DDR4-3200', price: 79 },
    { id: 2, name: 'G.SKILL Ripjaws V 32GB (2x16GB) DDR4-3600', price: 149 },
    { id: 3, name: 'Kingston Fury Beast 16GB (2x8GB) DDR4-3200', price: 69 },
    { id: 4, name: 'Corsair Vengeance RGB Pro 32GB (2x16GB) DDR4-3600', price: 169 },
  ],
  storage: [
    { id: 1, name: 'Samsung 970 EVO 1TB SSD', price: 129 },
    { id: 2, name: 'Crucial P5 500GB NVMe SSD', price: 59 },
    { id: 3, name: 'Seagate Barracuda 2TB HDD', price: 59 },
    { id: 4, name: 'Western Digital Black 1TB SSD', price: 139 },
  ],
  psu: [
    { id: 1, name: 'Corsair RM750x 750W 80+ Gold', price: 109 },
    { id: 2, name: 'EVGA SuperNOVA 850 G5 850W 80+ Gold', price: 149 },
    { id: 3, name: 'Seasonic Focus GX-750 750W 80+ Gold', price: 119 },
    { id: 4, name: 'Cooler Master MWE Gold 650W', price: 79 },
  ],
  case: [
    { id: 1, name: 'NZXT H510 Mid Tower', price: 69 },
    { id: 2, name: 'Fractal Design Meshify C', price: 89 },
    { id: 3, name: 'Corsair iCUE 4000X RGB', price: 124 },
    { id: 4, name: 'Phanteks P400A', price: 69 },
  ],
  cooling: [
    { id: 1, name: 'Corsair iCUE H100i RGB Pro XT (240mm AIO Cooler)', price: 169 },
    { id: 2, name: 'Noctua NH-D15', price: 89 },
    { id: 3, name: 'Cooler Master Hyper 212 RGB', price: 45 },
    { id: 4, name: 'ARCTIC P12 PWM 120mm Fan', price: 15 },
  ]
};

const Builder = () => {
  const [selectedComponents, setSelectedComponents] = useState({
    cpu: null,
    gpu: null,
    motherboard: null,
    ram: null,
    storage: null,
    psu: null,
    case: null,
    cooling: null,
  });

  const handleComponentSelect = (category, component) => {
    setSelectedComponents({
      ...selectedComponents,
      [category]: component,
    });
  };

  const totalPrice = Object.values(selectedComponents).reduce((total, component) => {
    return total + (component ? component.price : 0);
  }, 0);

  return (
    <div className="builder">
      <h1>Customize Your PC</h1>

      {Object.keys(componentOptions).map((category) => (
        <div key={category} className="component-selection">
          <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
          <select onChange={(e) => handleComponentSelect(category, JSON.parse(e.target.value))}>
            <option value={null}>Select {category}</option>
            {componentOptions[category].map((component) => (
              <option key={component.id} value={JSON.stringify(component)}>
                {component.name} - ${component.price}
              </option>
            ))}
          </select>
          {selectedComponents[category] && (
            <div>
              <h4>Selected {category}:</h4>
              <p>{selectedComponents[category].name} - ${selectedComponents[category].price}</p>
            </div>
          )}
        </div>
      ))}

      <h3>Total Price: ${totalPrice}</h3>

      <Link to="/cart">
        <button>Add to Cart</button>
      </Link>
    </div>
  );
};

export default Builder;
