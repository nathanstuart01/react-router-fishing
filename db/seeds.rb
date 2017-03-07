licenses = [{license_type: 'Group', price: 35.0},
            {license_type: 'Individual', price: 15.0}]
licenses.each do |lic| 
  license = License.new(license_type: lic[:license_type], price: lic[:price])
  if license.save 
    puts "#{license.license_type} saved"
  else 
    puts "#{license.license_type} errors #{license.errors.full_messages}"
  end
end



licenses = License.all 

licenses.each do |license| 
  checkout = Checkout.new(first_name: Faker::Name.first_name,
                  last_name: Faker::Name.last_name,
                  street: Faker::Address.street_name,
                  city: Faker::Address.city,
                  state: Faker::Address.state,
                  zip: Faker::Address.zip,
                  credit_number: Faker::Code.imei,
                  code: Faker::Code.unique.asin,
                  license_id: license.id
                  )
  if checkout.save 
    puts "Checkout saved"
  else 
    puts "Checkout Errors #{checkout.errors.full_messages}"
  end 
  
end 