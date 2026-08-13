(function() {
    'use strict';

    // ============================================================
    // 1. SERVICE CATALOG
    // ============================================================
    const serviceCatalog = {
        "it-support": {
            id: "it-support",
            name: "IT Support",
            packages: [
                { id: "basic", name: "Basic IT Support", description: "Essential IT support for small businesses.", included: ["Remote troubleshooting","Software assistance","Basic user support"] },
                { id: "standard", name: "Standard IT Support", description: "Support for growing businesses.", included: ["Remote support","Priority troubleshooting","Maintenance guidance"] },
                { id: "premium", name: "Premium IT Support", description: "Comprehensive IT support.", included: ["Priority support","Proactive maintenance","Business IT assistance"] }
            ],
            additions: [
                { id: "remote-support", name: "Remote Support" },
                { id: "onsite-support", name: "On-site Support" },
                { id: "after-hours", name: "After-hours Support" },
                { id: "device-troubleshooting", name: "Device Troubleshooting" },
                { id: "software-installation", name: "Software Installation" }
            ]
        },
        "networking": {
            id: "networking",
            name: "Networking",
            packages: [
                { id: "network-setup", name: "Network Setup", description: "Setup and configuration for a new network.", included: ["Router configuration","Wi-Fi setup","Basic testing"] },
                { id: "network-support", name: "Network Support", description: "Ongoing network assistance.", included: ["Troubleshooting","Configuration support","Remote assistance"] }
            ],
            additions: [
                { id: "router-config", name: "Router Configuration" },
                { id: "wifi-setup", name: "Wi-Fi Setup" },
                { id: "network-troubleshoot", name: "Network Troubleshooting" },
                { id: "network-install", name: "Network Installation" },
                { id: "network-cabling", name: "Network Cabling" },
                { id: "network-assessment", name: "Network Assessment" }
            ]
        },
        "website-development": {
            id: "website-development",
            name: "Website Development",
            packages: [
                { id: "business-website", name: "Business Website", description: "Professional website for your business.", included: ["Responsive design","Contact form","Basic SEO setup"] },
                { id: "custom-website", name: "Custom Website", description: "A more tailored website solution.", included: ["Custom pages","Advanced functionality","Responsive design"] }
            ],
            additions: [
                { id: "additional-pages", name: "Additional Website Pages" },
                { id: "website-maintenance", name: "Website Maintenance" },
                { id: "seo-setup", name: "SEO Setup" },
                { id: "contact-form", name: "Contact Form" },
                { id: "email-integration", name: "Business Email Integration" }
            ]
        },
        "website-hosting": {
            id: "website-hosting",
            name: "Website Hosting",
            packages: [
                { id: "business-hosting", name: "Business Hosting", description: "Hosting for a business website.", included: ["Website hosting","SSL","Basic support"] },
                { id: "managed-hosting", name: "Managed Hosting", description: "Managed hosting with additional support.", included: ["Hosting","SSL","Backups","Technical assistance"] }
            ],
            additions: [
                { id: "migration", name: "Website Migration" },
                { id: "ssl-setup", name: "SSL Setup" },
                { id: "backup-setup", name: "Backup Setup" },
                { id: "domain-assist", name: "Domain Assistance" }
            ]
        },
        "hardware-support": {
            id: "hardware-support",
            name: "Hardware Support",
            packages: [
                { id: "hardware-assist", name: "Hardware Assistance", description: "Help with hardware-related requirements.", included: ["Hardware assessment","Installation assistance","Troubleshooting"] }
            ],
            additions: [
                { id: "laptop-supply", name: "Laptop Supply" },
                { id: "desktop-supply", name: "Desktop Supply" },
                { id: "printer-setup", name: "Printer Setup" },
                { id: "hardware-install", name: "Hardware Installation" },
                { id: "hardware-troubleshoot", name: "Hardware Troubleshooting" }
            ]
        },
        "software-solutions": {
            id: "software-solutions",
            name: "Software Solutions",
            packages: [
                { id: "software-support", name: "Software Support", description: "Software setup and assistance.", included: ["Installation","Configuration","Troubleshooting"] }
            ],
            additions: [
                { id: "software-install", name: "Software Installation" },
                { id: "software-config", name: "Software Configuration" },
                { id: "software-troubleshoot", name: "Software Troubleshooting" }
            ]
        },
        "cyber-security": {
            id: "cyber-security",
            name: "Cyber Security",
            packages: [
                { id: "security-assessment", name: "Security Assessment", description: "Initial review of your security requirements.", included: ["Basic assessment","Recommendations","Action plan"] }
            ],
            additions: [
                { id: "security-review", name: "Security Review" },
                { id: "security-consult", name: "Security Consultation" },
                { id: "security-awareness", name: "Security Awareness" }
            ]
        },
        "cloud-services": {
            id: "cloud-services",
            name: "Cloud Services",
            packages: [
                { id: "cloud-setup", name: "Cloud Setup", description: "Cloud setup and configuration.", included: ["Initial configuration","Account setup","Basic guidance"] }
            ],
            additions: [
                { id: "cloud-migration", name: "Cloud Migration" },
                { id: "cloud-backup", name: "Cloud Backup" },
                { id: "cloud-consult", name: "Cloud Consultation" }
            ]
        },
        "remote-support": {
            id: "remote-support",
            name: "Remote Support",
            packages: [
                { id: "remote-plan", name: "Remote Support Plan", description: "Dedicated remote support.", included: ["Remote access","Troubleshooting","Helpdesk"] }
            ],
            additions: [
                { id: "remote-access", name: "Remote Access Setup" },
                { id: "helpdesk", name: "Helpdesk Support" }
            ]
        },
        "email-solutions": {
            id: "email-solutions",
            name: "Email Solutions",
            packages: [
                { id: "email-setup", name: "Email Setup", description: "Business email configuration.", included: ["Email setup","Domain integration","Basic support"] }
            ],
            additions: [
                { id: "email-migration", name: "Email Migration" },
                { id: "email-security", name: "Email Security" },
                { id: "spam-filter", name: "Spam Filtering" }
            ]
        },
        "software-installation": {
            id: "software-installation",
            name: "Software Installation",
            packages: [
                { id: "software-install-pkg", name: "Software Installation", description: "Installation and configuration.", included: ["Installation","Configuration","Testing"] }
            ],
            additions: [
                { id: "custom-config", name: "Custom Configuration" },
                { id: "user-training", name: "User Training" }
            ]
        },
        "business-consultation": {
            id: "business-consultation",
            name: "Business Consultation",
            packages: [
                { id: "consultation", name: "Consultation", description: "Expert business IT consultation.", included: ["Assessment","Recommendations","Strategy"] }
            ],
            additions: [
                { id: "strategy-session", name: "Strategy Session" },
                { id: "tech-audit", name: "Tech Audit" }
            ]
        },
        "other": {
            id: "other",
            name: "Other",
            packages: [
                { id: "custom-service", name: "Custom Service", description: "Tailored solution for your need.", included: ["Custom scope"] }
            ],
            additions: [
                { id: "custom-dev", name: "Custom Development" },
                { id: "specialized-support", name: "Specialized Support" }
            ]
        }
    };

    // ============================================================
    // 2. STATE
    // ============================================================
    let serviceItems = []; // { id, serviceId, optionId, optionType, name, billing, quantity }

    // ============================================================
    // 3. DOM REFS
    // ============================================================
    const primaryService = document.getElementById('primaryService');
    const primaryPackageSelect = document.getElementById('primaryPackageSelect');
    const primaryBilling = document.getElementById('primaryBilling');
    const primaryQty = document.getElementById('primaryQty');
    const addPrimaryBtn = document.getElementById('addPrimaryBtn');
    const addedContainer = document.getElementById('addedServicesContainer');
    const addServiceBtn = document.getElementById('addServiceBtn');
    const summaryContainer = document.getElementById('summaryContainer');
    const billingSummary = document.getElementById('billingSummary');
    const selectedServicesEmail = document.getElementById('selectedServicesEmail');
    const builderError = document.getElementById('builderError');

    // ============================================================
    // 4. HELPER FUNCTIONS
    // ============================================================

    /**
     * Populate all service dropdowns with options from serviceCatalog
     */
    function populateServiceDropdowns() {
        const services = Object.keys(serviceCatalog);
        const allSelects = [primaryService, ...document.querySelectorAll('.a-service')];
        allSelects.forEach(sel => {
            if (!sel) return;
            const current = sel.value;
            sel.innerHTML = '<option value="">Select a service...</option>';
            services.forEach(sid => {
                const opt = document.createElement('option');
                opt.value = sid;
                opt.textContent = serviceCatalog[sid].name;
                sel.appendChild(opt);
            });
            if (current && serviceCatalog[current]) sel.value = current;
        });
    }

    /**
     * Populate package/option dropdown for a given service
     */
    function populateOptions(serviceId, selectEl) {
        selectEl.innerHTML = '<option value="">Select package or option...</option>';
        const svc = serviceCatalog[serviceId];
        if (!svc) return;
        // Packages
        svc.packages.forEach(p => {
            const opt = document.createElement('option');
            opt.value = 'pkg_' + p.id;
            opt.textContent = p.name + ' (Package)';
            selectEl.appendChild(opt);
        });
        // Additions
        svc.additions.forEach(a => {
            const opt = document.createElement('option');
            opt.value = 'add_' + a.id;
            opt.textContent = a.name + ' (Service)';
            selectEl.appendChild(opt);
        });
    }

    /**
     * Update primary options when service changes
     */
    function updatePrimaryOptions() {
        const svc = primaryService.value;
        populateOptions(svc, primaryPackageSelect);
    }

    /**
     * Get service name from ID
     */
    function getServiceName(serviceId) {
        const svc = serviceCatalog[serviceId];
        return svc ? svc.name : serviceId;
    }

    /**
     * Get option name from service ID and option ID
     */
    function getOptionName(serviceId, optionId, optionType) {
        const svc = serviceCatalog[serviceId];
        if (!svc) return optionId;
        if (optionType === 'package') {
            const pkg = svc.packages.find(p => p.id === optionId);
            return pkg ? pkg.name : optionId;
        } else {
            const add = svc.additions.find(a => a.id === optionId);
            return add ? add.name : optionId;
        }
    }

    // ============================================================
    // 5. SERVICE ITEM MANAGEMENT
    // ============================================================

    /**
     * Add a service item from the primary row
     */
    function addPrimaryItem() {
        const serviceId = primaryService.value;
        const optionVal = primaryPackageSelect.value;
        const billing = primaryBilling.value;
        const qty = parseInt(primaryQty.value) || 1;

        if (!serviceId || !optionVal) {
            alert('Please select a service and a package/option.');
            return;
        }

        const optionType = optionVal.startsWith('pkg_') ? 'package' : 'addition';
        const optionId = optionVal.replace('pkg_', '').replace('add_', '');
        const name = getOptionName(serviceId, optionId, optionType);

        const item = {
            id: Date.now() + Math.random(),
            serviceId,
            optionId,
            optionType,
            name,
            billing,
            quantity: qty
        };
        serviceItems.push(item);
        renderAddedServices();
        updateSummary();
        // Reset primary row
        primaryPackageSelect.value = '';
        primaryQty.value = 1;
        primaryBilling.value = 'Once-off';
        builderError.classList.remove('show');
    }

    /**
     * Remove a service item by ID
     */
    function removeServiceItem(id) {
        serviceItems = serviceItems.filter(x => x.id !== id);
        renderAddedServices();
        updateSummary();
    }

    /**
     * Update a service item's billing
     */
    function updateItemBilling(id, billing) {
        const item = serviceItems.find(x => x.id === id);
        if (item) {
            item.billing = billing;
            updateSummary();
        }
    }

    /**
     * Update a service item's quantity
     */
    function updateItemQuantity(id, quantity) {
        const item = serviceItems.find(x => x.id === id);
        if (item) {
            item.quantity = Math.max(1, quantity);
            updateSummary();
        }
    }

    // ============================================================
    // 6. RENDER FUNCTIONS
    // ============================================================

    /**
     * Render all added service items
     */
    function renderAddedServices() {
        addedContainer.innerHTML = serviceItems.map((item) => {
            const svcName = getServiceName(item.serviceId);
            return `
                <div class="builder-row" data-id="${item.id}">
                    <div>
                        <label>Service</label>
                        <input type="text" value="${svcName}" readonly style="background:#f1f5f9;cursor:default;">
                    </div>
                    <div>
                        <label>Package / Option</label>
                        <input type="text" value="${item.name}" readonly style="background:#f1f5f9;cursor:default;">
                    </div>
                    <div>
                        <label>Billing</label>
                        <select class="edit-billing" data-id="${item.id}">
                            <option value="Once-off" ${item.billing === 'Once-off' ? 'selected' : ''}>Once-off</option>
                            <option value="Recurring" ${item.billing === 'Recurring' ? 'selected' : ''}>Recurring</option>
                        </select>
                    </div>
                    <div>
                        <label>Qty</label>
                        <input class="edit-qty" type="number" min="1" value="${item.quantity}" data-id="${item.id}">
                    </div>
                    <div style="display:flex;align-items:end;padding-bottom:4px;">
                        <button type="button" class="btn btn-danger remove-item" data-id="${item.id}" style="padding:10px 14px;font-size:16px;">×</button>
                    </div>
                </div>
            `;
        }).join('');

        // Event listeners for billing changes
        addedContainer.querySelectorAll('.edit-billing').forEach(el => {
            el.addEventListener('change', (e) => {
                const id = Number(el.dataset.id);
                updateItemBilling(id, e.target.value);
            });
        });

        // Event listeners for quantity changes
        addedContainer.querySelectorAll('.edit-qty').forEach(el => {
            el.addEventListener('input', (e) => {
                const id = Number(el.dataset.id);
                const val = parseInt(e.target.value) || 1;
                updateItemQuantity(id, val);
            });
        });

        // Event listeners for remove buttons
        addedContainer.querySelectorAll('.remove-item').forEach(el => {
            el.addEventListener('click', () => {
                const id = Number(el.dataset.id);
                removeServiceItem(id);
            });
        });
    }

    /**
     * Update the live request summary
     */
    function updateSummary() {
        if (serviceItems.length === 0) {
            summaryContainer.innerHTML = `<div class="summary-empty">Add a service to start building your request.</div>`;
            billingSummary.textContent = '—';
            selectedServicesEmail.value = '';
            return;
        }

        // Build summary items
        const itemsHtml = serviceItems.map(item => {
            const svcName = getServiceName(item.serviceId);
            return `
                <div class="summary-item">
                    <div class="stitle">${svcName} — ${item.name}</div>
                    <div class="sdetail">${item.billing} · Quantity: ${item.quantity}</div>
                </div>
            `;
        }).join('');

        summaryContainer.innerHTML = itemsHtml;

        // Update billing summary
        const billings = serviceItems.map(i => i.billing);
        const uniqueBillings = [...new Set(billings)];
        billingSummary.textContent = uniqueBillings.join(' + ');

        // Update hidden field for EmailJS
        const lines = serviceItems.map((item, idx) => {
            const svcName = getServiceName(item.serviceId);
            return `${idx+1}. ${svcName}\n   ${item.optionType === 'package' ? 'Package' : 'Service'}: ${item.name}\n   Billing: ${item.billing}\n   Quantity: ${item.quantity}`;
        });
        selectedServicesEmail.value = lines.join('\n\n');
    }

    /**
     * Add a temporary "Add Another Service" row
     */
    function addTemporaryServiceRow() {
        const id = Date.now() + Math.random();
        const row = document.createElement('div');
        row.className = 'builder-row';
        row.dataset.id = id;
        row.innerHTML = `
            <div>
                <label>Service</label>
                <select class="a-service" data-id="${id}">
                    <option value="">Select a service...</option>
                    ${Object.keys(serviceCatalog).map(sid => `<option value="${sid}">${serviceCatalog[sid].name}</option>`).join('')}
                </select>
            </div>
            <div>
                <label>Package / Option</label>
                <select class="a-option" data-id="${id}">
                    <option value="">Select package or option...</option>
                </select>
            </div>
            <div>
                <label>Billing</label>
                <select class="a-billing" data-id="${id}">
                    <option value="Once-off">Once-off</option>
                    <option value="Recurring">Recurring</option>
                </select>
            </div>
            <div>
                <label>Qty</label>
                <input class="a-qty" type="number" min="1" value="1" data-id="${id}">
            </div>
            <div style="display:flex;gap:6px;align-items:end;padding-bottom:4px;">
                <button type="button" class="btn btn-primary add-confirm" data-id="${id}" style="padding:10px 14px;font-size:13px;">✓ Add</button>
                <button type="button" class="btn btn-danger add-remove" data-id="${id}" style="padding:10px 14px;font-size:13px;">×</button>
            </div>
        `;
        addedContainer.appendChild(row);

        const svcSelect = row.querySelector('.a-service');
        const optSelect = row.querySelector('.a-option');

        // Populate options when service changes
        svcSelect.addEventListener('change', () => {
            populateOptions(svcSelect.value, optSelect);
        });

        // Confirm button - add the service
        row.querySelector('.add-confirm').addEventListener('click', () => {
            const serviceId = svcSelect.value;
            const optionVal = optSelect.value;
            const billing = row.querySelector('.a-billing').value;
            const qty = parseInt(row.querySelector('.a-qty').value) || 1;

            if (!serviceId || !optionVal) {
                alert('Please select a service and a package/option.');
                return;
            }

            const optionType = optionVal.startsWith('pkg_') ? 'package' : 'addition';
            const optionId = optionVal.replace('pkg_', '').replace('add_', '');
            const name = getOptionName(serviceId, optionId, optionType);

            const item = {
                id: Date.now() + Math.random(),
                serviceId,
                optionId,
                optionType,
                name,
                billing,
                quantity: qty
            };
            serviceItems.push(item);
            renderAddedServices();
            updateSummary();
            row.remove();
            builderError.classList.remove('show');
        });

        // Remove button - discard the row
        row.querySelector('.add-remove').addEventListener('click', () => {
            row.remove();
        });
    }

    // ============================================================
    // 7. URL PARAMETER LOADING
    // ============================================================

    /**
     * Load service and package from URL parameters
     * Supports: /request/?service=it-support&package=basic
     */
    function loadFromURL() {
        const params = new URLSearchParams(window.location.search);
        const serviceParam = params.get('service');
        const packageParam = params.get('package');

        if (serviceParam && serviceCatalog[serviceParam]) {
            primaryService.value = serviceParam;
            updatePrimaryOptions();

            if (packageParam) {
                const svc = serviceCatalog[serviceParam];
                // Check if it's a package
                const pkg = svc.packages.find(p => p.id === packageParam);
                if (pkg) {
                    primaryPackageSelect.value = 'pkg_' + packageParam;
                } else {
                    // Check if it's an addition
                    const add = svc.additions.find(a => a.id === packageParam);
                    if (add) {
                        primaryPackageSelect.value = 'add_' + packageParam;
                    }
                }
            }

            // Auto-add if both service and option are selected
            if (primaryService.value && primaryPackageSelect.value) {
                addPrimaryItem();
            }
        }
        // If invalid parameters, ignore and show empty form
    }

    // ============================================================
    // 8. FILE UPLOAD
    // ============================================================

    const fileInput = document.getElementById('fileInput');
    const fileListEl = document.getElementById('fileList');
    let uploadedFiles = [];

    fileInput.addEventListener('change', function(e) {
        uploadedFiles = Array.from(e.target.files);
        renderFileList();
    });

    /**
     * Render the list of uploaded files with remove buttons
     */
    function renderFileList() {
        if (uploadedFiles.length === 0) {
            fileListEl.innerHTML = '';
            return;
        }

        fileListEl.innerHTML = uploadedFiles.map((f, i) => `
            <div class="file-item">
                <span>${f.name}</span>
                <span>
                    ${(f.size / 1024 / 1024).toFixed(2)} MB
                    <span class="remove-file" data-index="${i}">×</span>
                </span>
            </div>
        `).join('');

        fileListEl.querySelectorAll('.remove-file').forEach(el => {
            el.addEventListener('click', function() {
                const idx = Number(this.dataset.index);
                uploadedFiles.splice(idx, 1);
                // Update the file input
                const dt = new DataTransfer();
                uploadedFiles.forEach(f => dt.items.add(f));
                fileInput.files = dt.files;
                renderFileList();
            });
        });
    }

    // Drag and drop support for file upload
    const dropZone = document.getElementById('fileDropZone');
    if (dropZone) {
        dropZone.addEventListener('dragover', function(e) {
            e.preventDefault();
            this.style.borderColor = '#00B4D8';
            this.style.background = '#f0f9ff';
        });

        dropZone.addEventListener('dragleave', function(e) {
            e.preventDefault();
            this.style.borderColor = '#cbd5e1';
            this.style.background = '#fafcff';
        });

        dropZone.addEventListener('drop', function(e) {
            e.preventDefault();
            this.style.borderColor = '#cbd5e1';
            this.style.background = '#fafcff';
            if (e.dataTransfer.files.length) {
                fileInput.files = e.dataTransfer.files;
                uploadedFiles = Array.from(e.dataTransfer.files);
                renderFileList();
            }
        });

        dropZone.addEventListener('click', function() {
            fileInput.click();
        });
    }

    // ============================================================
    // 9. FORM VALIDATION
    // ============================================================

    /**
     * Validate a single field
     */
    function validateField(id, errorId, condition) {
        const el = document.getElementById(id);
        const err = document.getElementById(errorId);
        const group = document.getElementById(id + 'Group');
        if (!condition) {
            group.classList.add('error');
            err.classList.add('show');
            return false;
        } else {
            group.classList.remove('error');
            err.classList.remove('show');
            return true;
        }
    }

    /**
     * Validate the entire form
     */
    function validateForm() {
        let valid = true;

        // Contact fields
        valid &= validateField('firstName', 'firstNameError', document.getElementById('firstName').value.trim().length > 0);
        valid &= validateField('lastName', 'lastNameError', document.getElementById('lastName').value.trim().length > 0);

        const email = document.getElementById('email').value.trim();
        valid &= validateField('email', 'emailError', email.length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));

        valid &= validateField('phone', 'phoneError', document.getElementById('phone').value.trim().length > 0);

        // Request type
        valid &= validateField('requestType', 'requestTypeError', document.getElementById('requestType').value !== '');

        // Subject
        valid &= validateField('subject', 'subjectError', document.getElementById('subject').value.trim().length > 0);

        // Details (min 10 chars)
        const details = document.getElementById('details').value.trim();
        valid &= validateField('details', 'detailsError', details.length >= 10);

        // Privacy
        const privacy = document.getElementById('privacyConsent');
        const privacyGroup = document.getElementById('privacyGroup');
        const privacyError = document.getElementById('privacyError');
        if (!privacy.checked) {
            privacyGroup.classList.add('error');
            privacyError.classList.add('show');
            valid = false;
        } else {
            privacyGroup.classList.remove('error');
            privacyError.classList.remove('show');
        }

        // Service items
        if (serviceItems.length === 0) {
            builderError.classList.add('show');
            valid = false;
        } else {
            builderError.classList.remove('show');
        }

        return valid;
    }

    // ============================================================
    // 10. EMAILJS SUBMISSION
    // ============================================================

    /**
     * Submit the form using EmailJS
     * Replace the placeholder keys with your actual EmailJS credentials
     */
    function submitToEmailJS(form) {
        // ===== REPLACE THESE WITH YOUR ACTUAL EMAILJS CREDENTIALS =====
        const EMAILJS_PUBLIC_KEY = "nA316I3oSUXG5jxNA";
        const EMAILJS_SERVICE_ID = "service_ufx5s3x";
        const EMAILJS_TEMPLATE_ID = "template_qstvayl";
        // =================================================================

        // Initialize EmailJS
        emailjs.init({
            publicKey: EMAILJS_PUBLIC_KEY
        });

        // Build communication_preferences string
        const prefs = [];
        document.querySelectorAll('input[name="preferences"]:checked').forEach(cb => {
            if (cb.value === 'updates') prefs.push('Status updates');
            else if (cb.value === 'approval') prefs.push('Contact before paid work');
            else if (cb.value === 'quotation') prefs.push('Send quotation first');
            else if (cb.value === 'ongoing') prefs.push('Interested in ongoing support');
        });

        // Add hidden field for communication_preferences
        const prefField = document.createElement('input');
        prefField.type = 'hidden';
        prefField.name = 'communication_preferences';
        prefField.value = prefs.join(', ');
        form.appendChild(prefField);

        // Submit to EmailJS
return emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form)
    .then(() => {
        // Send Auto-Reply to the customer
        return emailjs.sendForm(
            EMAILJS_SERVICE_ID,
            "template_xvs4wyh",
            form
        );
    })
    .then(() => {
        form.style.display = 'none';
        document.getElementById('successMessage').classList.add('show');
        document.getElementById('successMessage').scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    })
    
            .catch((err) => {
                console.error('EmailJS error:', err);
                alert('There was an error submitting your request. Please try again or contact us directly.\n\nError: ' + JSON.stringify(err));
            });
    }

    // ============================================================
    // 11. FORM SUBMIT HANDLER
    // ============================================================

    document.getElementById('requestForm').addEventListener('submit', function(e) {
        e.preventDefault();

        if (!validateForm()) {
            // Scroll to the first error
            const firstError = document.querySelector('.form-group.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }

        const form = this;

        // Submit to EmailJS
        submitToEmailJS(form);
    });

    // ============================================================
    // 12. MOBILE MENU TOGGLE
    // ============================================================

    const menuToggle = document.getElementById('menuToggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            const nav = document.getElementById('mainNav');
            nav.classList.toggle('open');
            this.setAttribute('aria-label', nav.classList.contains('open') ? 'Close menu' : 'Open menu');
        });
    }

    // Close menu when a link is clicked (mobile)
    document.querySelectorAll('#mainNav a').forEach(link => {
        link.addEventListener('click', function() {
            document.getElementById('mainNav').classList.remove('open');
        });
    });

    // ============================================================
    // 13. EVENT BINDINGS
    // ============================================================

    // Primary service change -> update package options
    primaryService.addEventListener('change', updatePrimaryOptions);

    // Add primary service button
    addPrimaryBtn.addEventListener('click', addPrimaryItem);

    // Add another service button
    addServiceBtn.addEventListener('click', addTemporaryServiceRow);

    // Allow Enter key on primary row to add item
    primaryPackageSelect.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            addPrimaryItem();
        }
    });
    primaryQty.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            addPrimaryItem();
        }
    });

    // ============================================================
    // 14. INITIALIZATION
    // ============================================================

    /**
     * Initialize the form
     */
    function init() {
        // Populate all service dropdowns
        populateServiceDropdowns();

        // Update primary options based on default selection
        updatePrimaryOptions();

        // Load from URL parameters
        loadFromURL();

        // Render any existing service items
        renderAddedServices();

        // Update summary
        updateSummary();

        console.log('Datenal Technologies Request Form initialized.');
        console.log('Example service page buttons:');
        console.log('  <a href="/support/request-form/?service=it-support&package=basic">Request Basic IT Support</a>');
        console.log('  <a href="/support/request-form/?service=networking&package=network-setup">Request Network Setup</a>');
        console.log('  <a href="/support/request-form/?service=website-development&package=business-website">Request Business Website</a>');
    }

    // Run initialization when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
